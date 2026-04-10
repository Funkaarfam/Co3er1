import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const resend = new Resend(process.env.RESEND_API_KEY);
const CO3ER_EMAIL = 'co3er@gmail.com';

if (!getApps().length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY || '';
  const formattedKey = privateKey.includes('\\n')
    ? privateKey.replace(/\\n/g, '\n')
    : privateKey;

  initializeApp({
    credential: cert({
      projectId:   process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:  formattedKey,
    }),
  });
}

const clientEmailHtml = (
  name: string,
  service: string,
  budget: string,
  timeline: string,
  message: string
) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 16px;background:#0c0c14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
  <tr><td>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr><td>
        <div style="display:inline-flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#a78bfa);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;">C3</div>
          <span style="font-size:15px;font-weight:600;color:#f0f0fa;">Co3er Development</span>
        </div>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#14141f;border:1px solid #1e1e2e;border-radius:16px;margin-bottom:16px;">
      <tr><td style="padding:36px 32px 28px;">
        <p style="font-size:13px;font-weight:600;letter-spacing:0.08em;color:#7c3aed;text-transform:uppercase;margin:0 0 12px;">Message received</p>
        <h1 style="font-size:26px;font-weight:700;color:#f0f0fa;margin:0 0 14px;line-height:1.25;letter-spacing:-0.5px;">Hey ${name}, we'll be in touch!</h1>
        <p style="font-size:15px;color:#8888a8;margin:0;line-height:1.6;">Our team reviews every inquiry and will get back to you within <span style="color:#a78bfa;font-weight:500;">24 hours</span>.</p>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#14141f;border:1px solid #1e1e2e;border-radius:16px;margin-bottom:16px;">
      <tr><td style="padding:24px 32px;">
        <p style="font-size:11px;font-weight:600;letter-spacing:0.1em;color:#4a4a6a;text-transform:uppercase;margin:0 0 18px;">Your inquiry summary</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;width:38%;"><span style="font-size:13px;color:#5a5a80;">Service</span></td>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;"><span style="font-size:13px;color:#d0d0f0;font-weight:500;">${service || 'Not specified'}</span></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;"><span style="font-size:13px;color:#5a5a80;">Budget</span></td>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;"><span style="font-size:13px;color:#d0d0f0;font-weight:500;">${budget || 'Not specified'}</span></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;"><span style="font-size:13px;color:#5a5a80;">Timeline</span></td>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e2e;"><span style="font-size:13px;color:#d0d0f0;font-weight:500;">${timeline || 'Not specified'}</span></td>
          </tr>
          <tr>
            <td style="padding:12px 0 0;vertical-align:top;"><span style="font-size:13px;color:#5a5a80;">Message</span></td>
            <td style="padding:12px 0 0;"><span style="font-size:13px;color:#d0d0f0;line-height:1.6;">${message}</span></td>
          </tr>
        </table>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a0f2e;border:1px solid #2e1a50;border-radius:16px;margin-bottom:16px;">
      <tr><td style="padding:22px 32px;">
        <p style="font-size:14px;color:#8888a8;margin:0 0 14px;line-height:1.5;">Need a faster response? Join our Discord for priority support.</p>
        <a href="https://discord.gg/co3er" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 22px;border-radius:8px;">Join Discord</a>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:20px 8px;text-align:center;">
        <p style="font-size:12px;color:#3a3a5a;margin:0 0 6px;">Co3er Development &bull; You received this because you submitted our contact form</p>
        <p style="font-size:12px;color:#3a3a5a;margin:0;">© ${new Date().getFullYear()} Co3er Development. All rights reserved.</p>
      </td></tr>
    </table>

  </td></tr>
</table>
</body>
</html>
`;

const internalEmailHtml = (
  name: string,
  email: string,
  service: string,
  budget: string,
  timeline: string,
  message: string
) => {
  const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px 16px;background:#0f0f0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
  <tr><td>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td><div style="display:inline-block;background:#1a2e1a;border:1px solid #2a4a2a;border-radius:20px;padding:5px 14px;"><span style="font-size:12px;font-weight:600;color:#4caf50;letter-spacing:0.05em;">NEW LEAD</span></div></td>
        <td style="text-align:right;"><span style="font-size:12px;color:#444;">${date}</span></td>
      </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#161616;border:1px solid #222;border-radius:16px;margin-bottom:16px;">
      <tr><td style="padding:28px 28px 8px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="width:62px;vertical-align:middle;">
              <div style="width:48px;height:48px;border-radius:50%;background:#1a1030;border:2px solid #7c3aed;text-align:center;line-height:48px;font-size:17px;font-weight:700;color:#a78bfa;">${initials}</div>
            </td>
            <td style="vertical-align:middle;">
              <p style="font-size:17px;font-weight:700;color:#f0f0f0;margin:0 0 3px;">${name}</p>
              <a href="mailto:${email}" style="font-size:13px;color:#7c3aed;text-decoration:none;">${email}</a>
            </td>
          </tr>
        </table>

        <hr style="border:none;border-top:1px solid #222;margin:0 0 20px;">

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;width:35%;"><span style="font-size:12px;font-weight:600;letter-spacing:0.06em;color:#555;text-transform:uppercase;">Service</span></td>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;"><span style="font-size:13px;color:#e0e0e0;font-weight:500;">${service || '—'}</span></td>
          </tr>
          <tr>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;"><span style="font-size:12px;font-weight:600;letter-spacing:0.06em;color:#555;text-transform:uppercase;">Budget</span></td>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;"><span style="font-size:13px;font-weight:700;color:#4caf50;">${budget || '—'}</span></td>
          </tr>
          <tr>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;"><span style="font-size:12px;font-weight:600;letter-spacing:0.06em;color:#555;text-transform:uppercase;">Timeline</span></td>
            <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;"><span style="font-size:13px;color:#e0e0e0;">${timeline || '—'}</span></td>
          </tr>
          <tr>
            <td style="padding:12px 0 0;vertical-align:top;"><span style="font-size:12px;font-weight:600;letter-spacing:0.06em;color:#555;text-transform:uppercase;">Message</span></td>
            <td style="padding:12px 0 0;">
              <p style="font-size:13px;color:#c0c0c0;line-height:1.65;margin:0;background:#111;border-left:3px solid #7c3aed;padding:10px 14px;border-radius:0 6px 6px 0;">${message}</p>
            </td>
          </tr>
        </table>
      </td></tr>

      <tr><td style="padding:16px 28px 22px;">
        <a href="mailto:${email}" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 22px;border-radius:8px;">Reply to ${name.split(' ')[0]}</a>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:16px 8px;text-align:center;">
        <p style="font-size:12px;color:#333;margin:0;">Co3er internal alert · contact form submission</p>
      </td></tr>
    </table>

  </td></tr>
</table>
</body>
</html>
`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!req.body) {
    return res.status(400).json({ error: 'Missing request body' });
  }

  const { name, email, service, budget, timeline, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    await resend.emails.send({
      from: 'Co3er Development <onboarding@resend.dev>',
      to: email,
      subject: `We got your message, ${name}!`,
      html: clientEmailHtml(name, service || '', budget || '', timeline || '', message),
    });

    await resend.emails.send({
      from: 'Co3er Contact Form <onboarding@resend.dev>',
      to: CO3ER_EMAIL,
      subject: `New inquiry from ${name}`,
      html: internalEmailHtml(name, email, service || '', budget || '', timeline || '', message),
    });

    const db = getFirestore();
    await db.collection('contacts').add({
      name,
      email,
      service:   service  || '',
      budget:    budget   || '',
      timeline:  timeline || '',
      message,
      status:    'unread',
      createdAt: FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
