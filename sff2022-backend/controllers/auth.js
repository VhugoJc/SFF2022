const { response } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { generarJWT, newPasswordgenerarJWT } = require('../helper/jwt-geenerator');
const { passwordRecoveryHtml, passwordRecoveryPlaineTxt } = require('../helper/passwordRecoveryTemplate');
const { sendMail } = require('../helper/nodemailer');
const moment = require('moment');

const login = async (req, res = response) => {

    const { email, password } = req.body;
    
    try {
        // check if the email already exists
        const user = await User.findOne({ email:email.toLowerCase() });
        if (!user) {
            return res.status(400).json({
                msg: 'Contraseña o correo incorrectos'
            });
        }

        // check if the user is active
        if (!user.status) {
            return res.status(400).json({
                msg: 'Necesitas confirmar tu correo electrónico'
            });
        }

        // check if the password is the same
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Contraseña o correo incorrectos'
            });
        }

        // Generar el JWT
        const token = await generarJWT(user.id);

        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}
const UsrTokenValidator = async (req, res = response) => {

    // Generar el JWT
    const token = await generarJWT(req.user._id);

    res.json({
        user: req.user,
        token: token,
    })

}
const confirmEmail = async (req, res = response) => {
    const { token } = req.body;
    try {
        let user = await User.findOneAndUpdate({ tokenEmail: token }, { $set: { "status": true, "tokenEmail": null } });
        if (!user) {
            throw { message: "No existe el token" }
        } else {
            res.json({ message: 'exitoso' })
        }

    } catch (err) {
        res.json({ err });
    }
}
const passwordRecovery = async (req, res = response) => {
    const { email } = req.body;
    const user = await User.findOne({ email:email.toLowerCase()  });
    const today = moment();
    try {
        if (user) { //if the user exists:
            if(!user.status){
                return res.status(400).json({message:'No has validado tu correo electrónico aún'})
            }
            if(user.lastPasswordModified){ //if the password has been changed
                const last = moment(user.lastPasswordModified);
                diff=today.diff(last,'hours');
                if(diff<24){//if it doesnt exist more than 24hrs since the last time
                    return res.status(400).json({message:'Deben pasar al menos 24 hras para poder volver a cambiar su contraseña'})
                }
            }
            const { name } = user;
            // JWT Generator
            const token = await newPasswordgenerarJWT(user.id);
            const link = `${process.env.URLFRONT}/account/auth/reset-password?token=${token}`
            const htmlTemplate = passwordRecoveryHtml(name, link);
            const txtTemplate = passwordRecoveryPlaineTxt(name, link);
            //send mail: 
            sendMail(htmlTemplate, 'Solicitud de cambio de contraseña 🔑', txtTemplate, email);
            res.json({ message: 'Verifique su correo electrónico para reestablecer su contraseña' })
        } else {
            res.json({ message: 'Verifique su correo electrónico para reestablecer su contraseña' })
        }
    } catch (err) {
        res.json({ message: 'Ocurrio un error recuperando su contraseña' })
    }
}
const resetPassword = async (req, res = response) => {
    const token = req.header('x-token');
    const {newPassword} = req.body;
    const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
    const today = moment();
    try{
        let user = await User.findById(uid);
        if(user.lastPasswordModified){ //if the password has been changed
            const last = moment(user.lastPasswordModified);
            diff=today.diff(last,'hours');
            if(diff<24){//if it doesnt exist more than 24hrs since the last time
                return res.status(400).json({message:'Deben pasar al menos 24 hras para poder volver a cambiar su contraseña'})
            }
        }
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(newPassword, salt);
        user.lastPasswordModified=today;
        await user.save();
        res.json({message:'contraseña cambiada correctamente'})
    }catch(err){
        console.log(err);
        res.json({message:'Error actualizando la contraseña'});
    }
}

module.exports = {
    login,
    UsrTokenValidator,
    confirmEmail,
    passwordRecovery,
    resetPassword
}