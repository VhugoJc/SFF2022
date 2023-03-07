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

const postSeller = async (req = request, res = response) => {
    const { name, lastname, email, password } = req.body;
    const uuid = uuidv4();
    try {
        const newUser = new User({ name, lastname, email, password, status:true,role:'ADMIN_ROLE'}); //status true, role admin
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
        res.json(newUser);

    } catch (err) {
        console.log(err);
        res.json(err);
    } 
}

const getSellers = async(req=request, res=response) => {
    try {
        const sellers = await User.find({$and:[{status:true},{role:'ADMIN_ROLE'}]});
        res.json(sellers);
    } catch (err) {
        res.json(err);
    }
}
const updateSellers= async(req=request, res=response) => {
    const data = req.body;
    try {
        await User.updateOne({_id:data._uid},data);
        res.json({message:"Exitoso"})
    } catch (err) {
        res.json(err);
    }
}

const deleteUser = async(req=request, res=response) =>{
    const {_uid}=req.body;
    try {
        await User.updateOne({_id:_uid},{status:false});
        res.json({message:"Exitoso"});
    } catch (err) {
        res.json(err);
    }
}
module.exports = {
    postUser,
    loginUser,
    postSeller,
    getSellers,
    updateSellers,
    deleteUser
};
