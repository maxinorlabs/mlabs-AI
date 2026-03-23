import { NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjiO1PlXv8bYRXa4FGJNfZ4xC3gAVAMftOfbg5Oo-x3aIvFeUoQuEaRNAYRB-qHrUW/exec';

export async function POST(request: Request) {
  const appsScriptUrl = APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json({ ok: false, message: 'Contact form not configured.' }, { status: 500 });
  }

  const formData = await request.formData();
  const attachment = formData.get('attachment');
  let attachmentPayload = {};

  if (attachment instanceof File && attachment.size > 0) {
    const maxAttachmentSizeBytes = 5 * 1024 * 1024;

    if (attachment.size > maxAttachmentSizeBytes) {
      return NextResponse.json(
        { ok: false, message: 'Attachment is too large. Please keep it under 5 MB.' },
        { status: 400 }
      );
    }

    const bytes = await attachment.arrayBuffer();

    attachmentPayload = {
      attachmentName: attachment.name,
      attachmentType: attachment.type || 'application/octet-stream',
      attachmentSize: attachment.size,
      attachmentData: Buffer.from(bytes).toString('base64'),
    };
  }

  const payload = {
    name: formData.get('name') ?? '',
    email: formData.get('email') ?? '',
    phone: formData.get('phone') ?? '',
    engagementType: formData.get('engagementType') ?? '',
    company: formData.get('company') ?? '',
    message: formData.get('message') ?? '',
    submittedAt: formData.get('submittedAt') ?? new Date().toISOString(),
    ...attachmentPayload,
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
