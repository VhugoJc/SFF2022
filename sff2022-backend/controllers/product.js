const { response } = require('express');
const Product = require('../models/product');

const postProduct = async (req, res = response) =>{
    const {name,description,category,amount,img}=req.body;

    try{
        let newProduct = new Product({name,description,category,amount,img});
        await newProduct.save();
        res.json({message:'Producto registrado exitosamente'});
    }catch(err){
        res.json({err});
    }
}

module.exports={
    postProduct
}