const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { sendMail } = require('../helper/nodemailer');
const { confirmEmailTemplateHTML, confirmEmailTemplatePlaneTxt } = require('../helper/confirmEmailTemplate');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const loginUser = async (req = request, res = response) => {
}

const postUser = async (req = request, res = response) => {
    const { name, lastname, email, password } = req.body;
    let newUserCreated = false;
    const uuid = uuidv4();
    try {
        const newUser = new User({ name, lastname, email, password });
        //email validation
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            throw { error: { message: "El correo ya existe" } }
        }
        //encript password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

        
        newUser.tokenEmail=uuid;

        await newUser.save();
        //user was created: send email
        newUserCreated = true;
    } catch (error) {
        newUserCreated = false;
        res.status(404).json(error);
    } finally {
        if (newUserCreated) { //confirm email configuration:
            const link = `${process.env.URLFRONT}/account/auth/confirm-email?token=${uuid}`
            const htmlTemplate = confirmEmailTemplateHTML(name, link);
            const txtTemplate = confirmEmailTemplatePlaneTxt(name, link);
            sendMail(htmlTemplate, 'Confirmación de correo electrónico📧', txtTemplate, email);
            res.json({ message: 'Hemos enviado un correo para confirmar tu correo electrónico' })
        }
    }
}

module.exports = {
    postUser,
    loginUser
};