import nodemailer from 'nodemailer';
import {WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_MAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    try {
        const htmlTemplate = WELCOME_EMAIL_TEMPLATE
            .replace('{{name}}', name)
            .replace('{{intro}}', intro);

        const mailOptions = {
            from: `"PULSE" <${process.env.NODE_MAILER_EMAIL}>`,
            to: email,
            subject: `Welcome to PULSE - your stock market toolkit is ready!`,
            text: 'Thanks for joining PULSE',
            html: htmlTemplate,
        }

        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent successfully to ${email}`);
    } catch (error) {
        console.error(`Failed to send welcome email to ${email}:`, error);
        throw error;
    }
}

export const sendNewsSummaryEmail = async (
    { email, date, newsContent }: { email: string; date: string; newsContent: string }
): Promise<void> => {
    try {
        const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
            .replace('{{date}}', date)
            .replace('{{newsContent}}', newsContent);

        const mailOptions = {
            from: `"PULSE News" <${process.env.NODE_MAILER_EMAIL}>`,
            to: email,
            subject: `📈 Market News Summary Today - ${date}`,
            text: `Today's market news summary from PULSE`,
            html: htmlTemplate,
        };

        await transporter.sendMail(mailOptions);
        console.log(`News summary email sent successfully to ${email}`);
    } catch (error) {
        console.error(`Failed to send news summary email to ${email}:`, error);
        throw error;
    }
};
