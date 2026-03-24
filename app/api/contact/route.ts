import { NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjiO1PlXv8bYRXa4FGJNfZ4xC3gAVAMftOfbg5Oo-x3aIvFeUoQuEaRNAYRB-qHrUW/exec';

export async function POST(request: Request) {
  const appsScriptUrl = APPS_SCRIPT_URL;

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

    let result: { ok?: boolean; message?: string } = {};
    try { result = JSON.parse(text); } catch { result = {}; }

    if (result.ok) {
      return NextResponse.json({ ok: true, message: 'Your inquiry has been submitted successfully.' });
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
      { ok: false, message: result.message ?? 'Submission failed. Please try again.' },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, message }, { status: 502 });
  }
}
