const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const Presale = require('../models/presale');
const User = require('../models/user');

const saleWithQR = async (req = request, res = response) => {
    const admin = req.user;
    const { jwtSaleData } = req.body;
    try{
        const {presaleId, userId, amount} = jwt.verify(jwtSaleData,process.env.SECRETSALESKEY) //actualizar variables de entorno en testing
        const presale = await Presale.findById(presaleId);
        const user = await User.findById(userId);
        
        if(!user){ //validation: if user exists
            return res.status(400).json({message:'No se pudo encontrar al usuario'});
        }
        if(!presale){ //validation: if user exists
            return res.status(400).json({message:'No se pudo encontrar la preventa'});
        }
        
        if(!presale.sellerId.equals(admin.team)){// validation: if the seller and the presale has the same team id 
            return res.status(400).json({message:'No Puedes registrar ventas que no son de tu equipo'});
        }


        const totalAmount = amount*presale.cost;
        res.json({presale, user, totalAmount});
    }catch(err){
        res.status(400).json({message:'No se encontró información con el presente código'});
        console.log(err);
    }
}

module.exports={
    saleWithQR
}