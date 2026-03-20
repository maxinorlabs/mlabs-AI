<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bd355760-ace8-4fdc-82c3-7d372021b101

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contact Form to Google Sheets

To send contact form submissions into Google Sheets:

1. Create a Google Sheet and open Extensions > Apps Script.
2. Paste the script from [docs/contact-form-apps-script.gs](./docs/contact-form-apps-script.gs).
3. Set the sheet tab name, Drive folder ID, and optional shared secret in the script.
4. Deploy the Apps Script as a web app.
5. Set `CONTACT_FORM_APPS_SCRIPT_URL` in your `.env.local`.
6. If you enabled the shared secret in Apps Script, set the same value in `CONTACT_FORM_SHARED_SECRET`.
