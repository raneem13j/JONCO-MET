// const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD
//     }
// });

// const sendEmail = async (options) => {
//     const message = {
//         from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
//         to: options.email,
//         subject: options.subject,
//         text: options.message
//     };

//     try {
//         await transport.sendMail(message);
//     } catch (err) {
//         console.log(err);
//     }
// };

// module.exports = sendEmail;
