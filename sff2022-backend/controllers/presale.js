const { response } = require('express');
const Presale = require('../models/presale');

const postPresale = async (req, res = response) =>{
    const {
        name,
        cost,
        description,
        sellerId,
        products,
        coverImg
    }=req.body;
    try{
        let newProduct = new Presale({
            name,
            cost,
            description,
            sellerId,
            products,
            coverImg

        });
        await newProduct.save();
        res.json({message:'Preventa registrado exitosamente'});
    }catch(err){
        res.json({err});
    }
}

module.exports={
    postPresale
}