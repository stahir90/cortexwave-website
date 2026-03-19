import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_TOKEN!,
    });

    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL!,
      process.env.MAILERSEND_FROM_NAME || "CortexWave"
    );

    const recipients = [
      new Recipient(process.env.MAILERSEND_TO_EMAIL!, "Tahir"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(email, name))
      .setSubject(`CortexWave Contact: ${name}`)
      .setHtml(
        `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin-top: 24px;" />
          <p style="color: #94a3b8; font-size: 12px;">Sent from cortexwave.com.au contact form</p>
        </div>`
      )
      .setText(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
