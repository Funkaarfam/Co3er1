import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, budget, timeline, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Co3er Development <onboarding@resend.dev>',
      to: email,
      subject: `✅ We got your message, ${name}!`,
      html: `
        <h2>Hey ${name}! 👋</h2>
        <p>Thanks for reaching out to Co3er Development.</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>We'll get back to you within 24 hours!</p>
        <p>— Co3er Development Team</p>
      `,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}