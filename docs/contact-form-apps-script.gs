const SHEET_NAME = 'Contact Leads';
const DRIVE_FOLDER_ID = '1cIPPEmk2wXQyRU3hd7EwzVFLfqTXBtbo';
const SHARED_SECRET = '';

const HEADER_ROW = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'I am a...',
  'My Company / Startup',
  'Message',
  'Attachment Name',
  'Attachment URL',
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, message: 'Missing request body.' });
    }

    const payload = JSON.parse(e.postData.contents);
    validateSharedSecret_(payload);
    const sheet = getOrCreateSheet_();
    ensureHeaderRow_(sheet);
    const attachment = saveAttachment_(payload);

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.engagementType || '',
      payload.company || '',
      payload.message || '',
      attachment.name || '',
      attachment.url || '',
    ]);

    return jsonResponse_({ ok: true, message: 'Saved.' });
  } catch (error) {
    return jsonResponse_({ ok: false, message: error && error.message ? error.message : 'Script error.' });
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeaderRow_(sheet) {
  const currentHeaders = sheet.getRange(1, 1, 1, HEADER_ROW.length).getValues()[0];
  const headersMatch = HEADER_ROW.every(function (h, i) { return currentHeaders[i] === h; });
  if (!headersMatch) {
    sheet.getRange(1, 1, 1, HEADER_ROW.length).setValues([HEADER_ROW]);
    sheet.setFrozenRows(1);
  }
}

function validateSharedSecret_(payload) {
  if (!SHARED_SECRET) return;
  if ((payload.sharedSecret || '') !== SHARED_SECRET) {
    throw new Error('Invalid shared secret.');
  }
}

function saveAttachment_(payload) {
  if (!payload.attachmentData) {
    return { name: payload.attachmentName || '', url: '' };
  }

  if (!DRIVE_FOLDER_ID) {
    throw new Error('Attachment upload requested but DRIVE_FOLDER_ID is not configured.');
  }

  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const bytes = Utilities.base64Decode(payload.attachmentData);
  const blob = Utilities.newBlob(
    bytes,
    payload.attachmentType || 'application/octet-stream',
    payload.attachmentName || 'attachment'
  );
  const file = folder.createFile(blob);

  return {
    name: file.getName(),
    url: file.getUrl(),
  };
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
