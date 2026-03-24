const SHEET_NAME = 'Contact Leads';

const HEADER_ROW = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'I am a...',
  'My Company / Startup',
  'Message',
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, message: 'Missing request body.' });
    }

    const payload = JSON.parse(e.postData.contents);
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

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
