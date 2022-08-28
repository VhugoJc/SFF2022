require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAILUSER, // generated ethereal user
        pass: process.env.MAILPASSWORD, // generated ethereal password
    },
});

transporter.verify().then(() => {
    console.log('Nodemailer listo')
})

module.exports={
    transporter
}