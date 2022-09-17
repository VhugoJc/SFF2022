const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const Presale = require('../models/presale');
const User = require('../models/user');
const Sale = require('../models/sale');
const { default: mongoose } = require('mongoose');

const postSale = async (req = request, res = response) => {
    const{clientId,presaleId,amount,cost} = req.body;
    const sellerMemberId = req.user._id;
    const SellerTeamId = req.user.team;
    console.log(clientId);
    
    
    try{
        const newSale = new Sale({clientId,presaleId,amount,cost,sellerMemberId,SellerTeamId});
        await newSale.save();
        res.json({newSale});
    }catch(err){
        console.log(err);
        res.json(err);
    }
}


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


        const totalAmount = amount;
        res.json({presale, user, totalAmount});
    }catch(err){
        res.status(400).json({message:'No se encontró información con el presente código'});
        console.log(err);
    }
}

module.exports={
    saleWithQR,
    postSale
}