import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const appsScriptUrl = process.env.CONTACT_FORM_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json({ ok: false, message: 'Contact form not configured.' }, { status: 500 });
  }

  const formData = await request.formData();

  const payload = {
    name: formData.get('name') ?? '',
    email: formData.get('email') ?? '',
    phone: formData.get('phone') ?? '',
    engagementType: formData.get('engagementType') ?? '',
    company: formData.get('company') ?? '',
    message: formData.get('message') ?? '',
    submittedAt: new Date().toISOString(),
  };

  try {
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

    return NextResponse.json(
      { ok: false, message: result.message ?? 'Submission failed. Please try again.' },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, message }, { status: 502 });
  }
}
