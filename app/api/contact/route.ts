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

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

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
