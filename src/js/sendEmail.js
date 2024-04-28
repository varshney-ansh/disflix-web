import nodemailer from 'nodemailer';
import { html } from './htmlEmail';

const sendEmail = async({to, url, text, user}) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NO_EMAIL_USER,
            pass: process.env.NO_EMAIL_PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.NO_EMAIL_USER,
        to,
        subject: "Verify Your Email",
        html: html({url, text, user})
    }

    const result = await transporter.sendMail(mailOptions);
    return result;
}

export default sendEmail;