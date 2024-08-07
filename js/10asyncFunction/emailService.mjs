const nodemailer = require('nodemailer');

async function sendEmail(emailData) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your.email@gmail.com',
            pass: 'your_password'
        }
    });

    let info = await transporter.sendMail(emailData);
    console.log('Message sent: %s', info.messageId);
}
