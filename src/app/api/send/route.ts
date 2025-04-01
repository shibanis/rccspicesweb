import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Update this with your verified domain
      to: 'shibani1994@gmail.com', // Your receiving email
      subject: 'New Contact Form Submission - RCC Spices',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `
    });

    if (data.error) {
      return Response.json({ error: data.error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
} 