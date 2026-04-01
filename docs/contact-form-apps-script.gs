const SHEET_NAME = 'Contact Leads';
const NOTIFICATION_EMAILS = ['admin@mlabs.co.in'].filter(Boolean);
const NOTIFICATION_SENDER_NAME = 'Maxinor Website Contact Form';

// If this script is not bound to a Google Sheet, paste the spreadsheet ID here.
// Leave blank when the script lives inside Extensions > Apps Script for that sheet.
const SPREADSHEET_ID = '';

// Create a folder in Google Drive, then paste its ID here.
// Find the ID in the folder's URL: drive.google.com/drive/folders/THIS_PART
const DRIVE_FOLDER_ID = '1cIPPEmk2wXQyRU3hd7EwzVFLfqTXBtbo';

const HEADER_ROW = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'I am a...',
  'My Company / Startup',
  'Message',
  'Attachment',
];

function doGet() {
  return jsonResponse_({ ok: true, message: 'Contact form Apps Script is running.' });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const sheet = getOrCreateSheet_();
    ensureHeaderRow_(sheet);

    let attachmentLink = '';
    let uploadError = '';

    if (payload.fileBase64 && payload.fileName) {
      try {
        attachmentLink = uploadFileToDrive_(
          payload.fileBase64,
          payload.fileName,
          payload.fileMimeType || 'application/octet-stream'
        );
      } catch (err) {
        uploadError = err && err.message ? err.message : String(err);
        Logger.log('Drive upload failed: ' + uploadError);
      }
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.engagementType || '',
      payload.company || '',
      payload.message || '',
      attachmentLink,
    ]);

    const notificationSent = sendLeadNotification_(payload, attachmentLink);

    return jsonResponse_({
      ok: true,
      message: notificationSent ? 'Saved.' : 'Saved, but notification email was skipped.',
      notificationSent: notificationSent,
      uploadError: uploadError || null,
      attachmentLink: attachmentLink || null,
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : 'Script error.',
    });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing request body.');
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error('Invalid JSON body: ' + error);
  }
}

function uploadFileToDrive_(base64Data, fileName, mimeType) {
  const normalizedBase64 = String(base64Data || '').split(',').pop();
  if (!normalizedBase64) {
    throw new Error('Attachment payload was empty.');
  }

  const bytes = Utilities.base64Decode(normalizedBase64);
  const safeFileName = sanitizeFileName_(fileName || 'attachment');
  const blob = Utilities.newBlob(bytes, mimeType || 'application/octet-stream', safeFileName);

  let file;
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID !== 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE') {
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    file = folder.createFile(blob);
  } else {
    file = DriveApp.createFile(blob);
  }

  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (error) {
    Logger.log('Could not update file sharing: ' + error);
  }

  return file.getUrl();
}

function sanitizeFileName_(fileName) {
  return String(fileName || 'attachment').replace(/[\\/:*?"<>|]+/g, '_');
}

function getOrCreateSheet_() {
  const spreadsheet = getSpreadsheet_();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  return sheet;
}

function getSpreadsheet_() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (activeSpreadsheet) {
    return activeSpreadsheet;
  }

  throw new Error('No spreadsheet found. Bind this script to a Google Sheet or set SPREADSHEET_ID.');
}

function ensureHeaderRow_(sheet) {
  const currentHeaders = sheet.getRange(1, 1, 1, HEADER_ROW.length).getValues()[0];
  const headersMatch = HEADER_ROW.every(function (header, index) {
    return currentHeaders[index] === header;
  });

  if (!headersMatch) {
    sheet.getRange(1, 1, 1, HEADER_ROW.length).setValues([HEADER_ROW]);
    sheet.setFrozenRows(1);
  }
}

function sendLeadNotification_(payload, attachmentLink) {
  if (!NOTIFICATION_EMAILS.length) return false;

  const subject = 'New Maxinor contact form submission';
  const bodyLines = [
    'A new contact form submission was received.',
    '',
    'Timestamp: ' + (payload.submittedAt || new Date().toISOString()),
    'Name: ' + (payload.name || ''),
    'Email: ' + (payload.email || ''),
    'Phone: ' + (payload.phone || ''),
    'I am a...: ' + (payload.engagementType || ''),
    'My Company / Startup: ' + (payload.company || ''),
    'Message:',
    payload.message || '',
  ];

  if (attachmentLink) {
    bodyLines.push('', 'Attachment: ' + attachmentLink);
  }

  const body = bodyLines.join('\n');
  const primaryRecipient = NOTIFICATION_EMAILS[0];
  const bccRecipients = NOTIFICATION_EMAILS.slice(1).join(',');
  const options = {
    name: NOTIFICATION_SENDER_NAME,
  };

  if (payload.email) options.replyTo = payload.email;
  if (bccRecipients) options.bcc = bccRecipients;

  try {
    MailApp.sendEmail(primaryRecipient, subject, body, options);
    return true;
  } catch (error) {
    Logger.log('Lead notification email failed: ' + error);
    return false;
  }
}

function testDriveAccess() {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  Logger.log('Folder name: ' + folder.getName());
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
