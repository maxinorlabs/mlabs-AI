const SHEET_NAME = 'Contact Leads';
const NOTIFICATION_EMAILS = [
  'admin@mlabs.co.in',
].filter(Boolean);
const NOTIFICATION_SENDER_NAME = 'Maxinor Website Contact Form';

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

    const notificationSent = sendLeadNotification_(payload);

    return jsonResponse_({
      ok: true,
      message: notificationSent ? 'Saved.' : 'Saved, but notification email was skipped.',
      notificationSent: notificationSent,
    });
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

function sendLeadNotification_(payload) {
  if (!NOTIFICATION_EMAILS.length) return false;

  const subject = 'New Maxinor contact form submission';
  const body = [
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
  ].join('\n');

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

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
