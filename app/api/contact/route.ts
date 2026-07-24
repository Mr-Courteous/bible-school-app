import { NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, inquiryType, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 });
    }

    const receiver = process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: `"Christ-Pattern Bible College Website" <${process.env.GMAIL_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `New Inquiry: ${inquiryType || 'General'} — ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\nInquiry type: ${inquiryType || 'Not specified'}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #333;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry type:</strong> ${inquiryType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form send error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
