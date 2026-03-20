import { NextResponse } from 'next/server';

const MAX_ATTACHMENT_SIZE_BYTES = 10 * 1024 * 1024;
const REQUIRED_FIELDS = ['name', 'email', 'engagementType', 'message'] as const;
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set(['pdf', 'ppt', 'pptx']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RequiredField = (typeof REQUIRED_FIELDS)[number];
type ContactField = RequiredField | 'phone' | 'company';

function getString(formData: FormData, key: ContactField) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function buildErrorResponse(
  errors: Record<string, string>,
  message = 'Please correct the highlighted fields and try again.',
) {
  return NextResponse.json(
    {
      ok: false,
      message,
      errors,
    },
    { status: 400 },
  );
}

export async function POST(request: Request) {
  const appsScriptUrl = process.env.CONTACT_FORM_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Contact form integration is not configured yet.',
      },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const values = {
    name: getString(formData, 'name'),
    email: getString(formData, 'email'),
    phone: getString(formData, 'phone'),
    engagementType: getString(formData, 'engagementType'),
    company: getString(formData, 'company'),
    message: getString(formData, 'message'),
  };

  const errors: Record<string, string> = {};

  for (const field of REQUIRED_FIELDS) {
    if (!values[field]) {
      errors[field] = 'This field is required.';
    }
  }

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const attachmentValue = formData.get('attachment');
  let attachmentPayload:
    | {
        name: string;
        type: string;
        size: number;
        contentBase64: string;
      }
    | undefined;

  if (attachmentValue instanceof File && attachmentValue.size > 0) {
    const fileName = attachmentValue.name.trim();
    const extension = fileName.split('.').pop()?.toLowerCase() ?? '';

    if (!ALLOWED_ATTACHMENT_EXTENSIONS.has(extension)) {
      errors.attachment = 'Only PDF, PPT, and PPTX files are supported.';
    } else if (attachmentValue.size > MAX_ATTACHMENT_SIZE_BYTES) {
      errors.attachment = 'Attachment must be 10 MB or smaller.';
    } else {
      const fileBuffer = Buffer.from(await attachmentValue.arrayBuffer());
      attachmentPayload = {
        name: fileName,
        type: attachmentValue.type || 'application/octet-stream',
        size: attachmentValue.size,
        contentBase64: fileBuffer.toString('base64'),
      };
    }
  }

  if (Object.keys(errors).length > 0) {
    return buildErrorResponse(errors);
  }

  const payload = {
    ...values,
    attachment: attachmentPayload,
    submittedAt: new Date().toISOString(),
    sharedSecret: process.env.CONTACT_FORM_SHARED_SECRET ?? '',
  };

  try {
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const responseText = await response.text();
    let result: { ok?: boolean; message?: string } = {};

    try {
      result = JSON.parse(responseText);
    } catch {
      result = {};
    }

    if (!response.ok || !result.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            result.message ??
            'We could not forward your inquiry to Google Sheets. Please try again in a moment.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: 'Your inquiry has been submitted successfully.',
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: 'We could not reach the contact form service. Please try again in a moment.',
      },
      { status: 502 },
    );
  }
}
