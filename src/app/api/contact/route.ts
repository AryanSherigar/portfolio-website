import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'sherigararyan90@gmail.com';

  if (!apiKey || !fromEmail) {
    console.error('Contact API is missing RESEND_API_KEY or CONTACT_FROM_EMAIL env vars.');
    return NextResponse.json(
      { error: 'Contact service is not configured. Please try again later.' },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
        <hr />
        <p style="white-space:pre-wrap">${escapedMessage}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unexpected contact API error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
