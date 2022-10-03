const { response, request } = require('express');
const Product = require('../models/product');
const Team = require('../models/team');

const postProduct = async (req = request, res = response) =>{
    //destructuring
    const {name,description,category,amount,img,teamSellerId} = req.body;
    
    const {team} = req.user;
    //validation
    if(!team.equals(teamSellerId)){
        return res.status(404).json({message:'Debes pertenecer al equipo para poder agregar productos'});
    }
    const teamExist = await Team.findById(teamSellerId);
    if(!teamExist){
        return res.status(404).json({message:'No existe un equipo con ese ID'});
    }
    //add to database
    try{
        const newProduct = new Product({name,description,category,amount,img,teamSellerId});
        await newProduct.save();
        res.json({product:newProduct});    
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Ha ocurrido un error en el servidor"});
    }
}

module.exports={postProduct}