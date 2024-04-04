const nodemailer = require("nodemailer");

module.exports = async ({ from, to, subject, text, html }) => {

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });
    
    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body
        });
        
        console.log('Email sent successfully:');
        return info; // Return the info object if needed
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Throw the error to handle it in the caller function
    }
};
