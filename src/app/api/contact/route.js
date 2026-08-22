import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, phone } = data;
        const service = data.service || '';
        const subject = data.subject || (service ? `New Enquiry: ${service}` : 'Company Profile Enquiry');
        const message = data.message || (service ? `Service Needed: ${service}` : 'Enquiry from website');

        // Validation to ensure all essential fields are provided
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '465'),
            secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Setup email data
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address (must be the authenticated user for many SMTP providers)
            replyTo: email,
            to: process.env.EMAIL_TO,
            subject: `New Enquiry: ${service || subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
                        <h2 style="margin: 0; font-size: 24px;">New Enquiry Received</h2>
                    </div>
                    <div style="padding: 30px; background-color: #f8fafc;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155; width: 140px;">Name:</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Email:</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Phone:</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone}</td>
                                </tr>
                                ${service ? `
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Service Needed:</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${service}</td>
                                </tr>` : ''}
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Subject:</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subject}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div style="margin-top: 30px;">
                            <h3 style="color: #334155; margin-bottom: 10px; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Message / Requirements:</h3>
                            <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0; color: #0f172a; line-height: 1.6;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>
                    <div style="background-color: #f1f5f9; padding: 15px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0;">
                        This email was sent automatically from your website's enquiry form.
                    </div>
                </div>
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
