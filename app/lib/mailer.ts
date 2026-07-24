import nodemailer from 'nodemailer';

// Gmail SMTP requires an App Password, not your regular Gmail password.
// Generate one at: https://myaccount.google.com/apppasswords
// (requires 2-Step Verification to be enabled on the Google account first)
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
