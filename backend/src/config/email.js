import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email transporter verification failed:', error);
    } else {
        console.log('✓ Email server is ready to send messages');
    }
});

/**
 * Send contact form email
 * @param {Object} data - Email data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.message - Message content
 */
export async function sendContactEmail({ name, email, message }) {
    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || 'contactus@supremusllc.biz',
        replyTo: email,
        subject: `Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim(),
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin: 20px 0;">
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #D4AF37;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the Supremus LLC contact form.</p>
        </div>
      </div>
    `,
    };

    return await transporter.sendMail(mailOptions);
}

export default transporter;
