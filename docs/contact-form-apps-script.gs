const SHEET_NAME = 'Contact Leads';
const DRIVE_FOLDER_ID = '1cIPPEmk2wXQyRU3hd7EwzVFLfqTXBtbo';
const SHARED_SECRET = '';

const HEADER_ROW = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'Engagement Type',
  'Company / Startup Name',
  'Message',
  'Attachment Name',
  'Attachment Type',
  'Attachment Drive URL',
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({
        ok: false,
        message: 'Missing request body.',
      });
    }

    const payload = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && payload.sharedSecret !== SHARED_SECRET) {
      return jsonResponse_({
        ok: false,
        message: 'Unauthorized request.',
      });
    }

    const requiredFields = ['name', 'email', 'engagementType', 'message'];
    for (var i = 0; i < requiredFields.length; i += 1) {
      var field = requiredFields[i];
      if (!payload[field]) {
        return jsonResponse_({
          ok: false,
          message: 'Missing required field: ' + field,
        });
      }
    }

    const attachmentInfo = saveAttachment_(payload.attachment);
    const sheet = getOrCreateSheet_();
    ensureHeaderRow_(sheet);

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.engagementType || '',
      payload.company || '',
      payload.message || '',
      attachmentInfo.name,
      attachmentInfo.type,
      attachmentInfo.url,
    ]);

    return jsonResponse_({
      ok: true,
      message: 'Submission saved successfully.',
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : 'Unexpected Apps Script error.',
    });
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
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

function saveAttachment_(attachment) {
  if (!attachment || !attachment.contentBase64) {
    return {
      name: '',
      type: '',
      url: '',
    };
  }

  if (!DRIVE_FOLDER_ID || DRIVE_FOLDER_ID === 'PASTE_GOOGLE_DRIVE_FOLDER_ID_HERE') {
    throw new Error('DRIVE_FOLDER_ID must be set before attachments can be uploaded.');
  }

  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const decodedBytes = Utilities.base64Decode(attachment.contentBase64);
  const blob = Utilities.newBlob(
    decodedBytes,
    attachment.type || 'application/octet-stream',
    buildAttachmentName_(attachment.name || 'attachment')
  );
  const file = folder.createFile(blob);

  return {
    name: file.getName(),
    type: attachment.type || '',
    url: file.getUrl(),
  };
}

function buildAttachmentName_(fileName) {
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
  return timestamp + '-' + fileName;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
