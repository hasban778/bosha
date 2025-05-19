import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function attemptSendMail(mailOptions: any, transporter: any) {
  try {
    // Verify SMTP connection configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    // Send the email
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('SMTP attempt failed:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Create transporter with debug logging
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      debug: true, // Enable debug logs
      logger: true // Enable built-in logger
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: 'osabitandrew13@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Try sending up to 3 times (initial attempt + 2 retries)
    let attempts = 0;
    const maxAttempts = 3;
    let success = false;

    while (attempts < maxAttempts && !success) {
      attempts++;
      console.log(`SMTP attempt ${attempts} of ${maxAttempts}`);
      
      success = await attemptSendMail(mailOptions, transporter);
      
      if (!success && attempts < maxAttempts) {
        // Wait for 1 second before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    if (!success) {
      throw new Error(`Failed to send email after ${maxAttempts} attempts`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: `Failed to send message: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}