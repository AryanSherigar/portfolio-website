import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
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

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio contact from ${name.trim()}`,
      replyTo: email.trim(),
      text: [
        `Name:    ${name.trim()}`,
        `Email:   ${email.trim()}`,
        ``,
        `Message:`,
        message.trim(),
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
        <hr />
        <p style="white-space:pre-wrap">${message.trim()}</p>
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
