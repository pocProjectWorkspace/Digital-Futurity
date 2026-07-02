import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  message?: string;
  // Honeypot — real users never fill this; bots do.
  company_website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Silently accept honeypot hits so bots think they succeeded.
  if (body.company_website && body.company_website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();
  const organisation = (body.organisation ?? '').trim();
  const phone = (body.phone ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // If email isn't configured yet, don't pretend the message was delivered.
  if (!apiKey || !to || !from) {
    console.error(
      'Contact form not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.',
    );
    return NextResponse.json(
      { error: 'Messaging is not configured yet. Please email us directly for now.' },
      { status: 503 },
    );
  }

  const html = `
    <h2>New enquiry via Digital Futurity</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Organisation:</strong> ${escapeHtml(organisation) || '—'}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry — ${name}${organisation ? ` (${organisation})` : ''}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend error:', res.status, detail);
      return NextResponse.json(
        { error: 'We could not send your message. Please email us directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact send failed:', err);
    return NextResponse.json(
      { error: 'We could not send your message. Please email us directly.' },
      { status: 502 },
    );
  }
}
