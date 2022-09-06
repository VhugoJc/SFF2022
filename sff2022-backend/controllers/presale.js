const { response } = require('express');
const Product = require('../models/presale');

const postPresale = async (req, res = response) =>{
    const {
        name,
        cost,
        description,
        sellerId,
        products,
        coverImg
    }=req.body;
    console.log('########');
    try{
        let newProduct = new Product({
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