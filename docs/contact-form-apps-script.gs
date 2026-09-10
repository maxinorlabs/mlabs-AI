const SPREADSHEET_ID = '1uqF5SeJoKoWZHN3vormvoZXQAXrCvTBuI8V5MQir8I4';
const SHEET_NAME = 'Contact Leads';
const ATTACHMENTS_FOLDER_NAME = 'Maxinor Contact Attachments';
const NOTIFICATION_EMAILS = ['admin@mlabs.co.in'];
const NOTIFICATION_SENDER_NAME = 'Maxinor Website Contact Form';

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

function doPost(event) {
  try {
    const payload = parsePayload_(event);
    const sheet = getSheet_();
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
      } catch (error) {
        uploadError = error && error.message ? error.message : String(error);
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

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error('Missing request body.');
  }

  try {
    return JSON.parse(event.postData.contents);
  } catch (error) {
    throw new Error('Invalid JSON body: ' + error);
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeaderRow_(sheet) {
  const currentHeaders = sheet.getRange(1, 1, 1, HEADER_ROW.length).getValues()[0];
  const headersMatch = HEADER_ROW.every(function (header, index) {
    return currentHeaders[index] === header;
  });

  if (!headersMatch) {
    throw new Error('The Contact Leads headers do not match the expected form structure.');
  }
}

function uploadFileToDrive_(base64Data, fileName, mimeType) {
  const normalizedBase64 = String(base64Data).split(',').pop();
  if (!normalizedBase64) throw new Error('Attachment payload was empty.');

  const blob = Utilities.newBlob(
    Utilities.base64Decode(normalizedBase64),
    mimeType,
    sanitizeFileName_(fileName)
  );
  const folder = getOrCreateAttachmentsFolder_();
  const file = folder.createFile(blob);

  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (error) {
    Logger.log('Could not set attachment link sharing: ' + error);
  }

  return file.getUrl();
}

function getOrCreateAttachmentsFolder_() {
  const folders = DriveApp.getFoldersByName(ATTACHMENTS_FOLDER_NAME);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(ATTACHMENTS_FOLDER_NAME);
}

function sanitizeFileName_(fileName) {
  return String(fileName || 'attachment').replace(/[\\/:*?"<>|]+/g, '_');
}

function sendLeadNotification_(payload, attachmentLink) {
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

  if (attachmentLink) bodyLines.push('', 'Attachment: ' + attachmentLink);

  try {
    const options = {
      name: NOTIFICATION_SENDER_NAME,
    };
    if (payload.email) options.replyTo = payload.email;

    MailApp.sendEmail(NOTIFICATION_EMAILS.join(','), subject, bodyLines.join('\n'), options);
    return true;
  } catch (error) {
    Logger.log('Lead notification email failed: ' + error);
    return false;
  }
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
