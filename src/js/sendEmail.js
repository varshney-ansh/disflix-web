import nodemailer from 'nodemailer';
import { html } from './htmlEmail';

const sendEmail = async({to, url, text, user}) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: "Verify Your Email",
        html: html({url, text, user})
    }

    const result = await transporter.sendMail(mailOptions);
    return result;
}

export default sendEmail;