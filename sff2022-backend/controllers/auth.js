const { response } = require('express');
const bcryptjs = require('bcryptjs')

const User = require('../models/user');
const { generarJWT } = require('../helper/jwt-geenerator');


const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
      console.log(email, password);
        // check if the email already exists
        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // check if the user is active
        if ( !user.status ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // check if the password is the same
        const validPassword = bcryptjs.compareSync( password, user.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( user.id );

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

const UsrTokenValidator = async (req, res = response ) => {

    // Generar el JWT
    const token = await generarJWT( req.user._id );
    
    res.json({
        user: req.user,
        token: token,
    })

}


module.exports ={
    login,
    UsrTokenValidator
}