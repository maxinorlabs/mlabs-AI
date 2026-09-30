import { NextResponse } from 'next/server';
import { CONTACT_FORM_APPS_SCRIPT_URL } from '@/lib/contact-form';

type ContactSubmissionResult = {
  ok?: boolean;
  message?: string;
  uploadError?: string | null;
  attachmentLink?: string | null;
};

export async function POST(request: Request) {
  const appsScriptUrl = process.env.CONTACT_FORM_APPS_SCRIPT_URL ?? CONTACT_FORM_APPS_SCRIPT_URL;

  try {
    if (!appsScriptUrl) {
      return NextResponse.json({ ok: false, message: 'Contact form not configured.' }, { status: 500 });
    }

    const payload = await request.json();

    // Apps Script runs doPost, then answers 302 to a one-time reply page. That redirect proves the
    // submission was processed, so a failure reading the reply page must not be shown as a failed submission.
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      redirect: 'manual',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const replyUrl = response.status >= 300 && response.status < 400 ? response.headers.get('location') : null;
    let text = '';

    if (replyUrl) {
      try {
        text = await (await fetch(replyUrl, { redirect: 'follow' })).text();
      } catch (err) {
        console.warn('Contact form: submission accepted but reply could not be read', err);
      }

      if (!text || text.trim().startsWith('<')) {
        console.warn('Contact form: submission accepted but reply was not JSON');
        return NextResponse.json({
          ok: true,
          message: 'Your inquiry has been submitted successfully.',
          uploadError: null,
          attachmentLink: null,
        });
      }
    } else {
      text = await response.text();
    }

    let result: ContactSubmissionResult = {};
    try {
      result = JSON.parse(text) as ContactSubmissionResult;
    } catch {
      result = {};
    }

    if (result.ok) {
      return NextResponse.json({
        ok: true,
        message: 'Your inquiry has been submitted successfully.',
        uploadError: result.uploadError ?? null,
        attachmentLink: result.attachmentLink ?? null,
      });
    }

    if (!result.ok && text.trim().startsWith('<')) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Apps Script returned an HTML page instead of JSON. Redeploy the web app and set access to Anyone.'
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: result.message ?? 'Submission failed. Please try again.',
        uploadError: result.uploadError ?? null,
      },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, message }, { status: 502 });
  }
}
