const { response, request } = require("express");
const Presale = require("../models/presale");

const postPresale = async (req, res = response) => {
    const { name, cost, description, sellerId, products, coverImg, tortas } =
        req.body;
    try {
        let newProduct = new Presale({
            name,
            cost,
            description,
            sellerId,
            products,
            coverImg,
            tortas,
        });
        await newProduct.save();
        res.json({ message: "Preventa registrado exitosamente" });
    } catch (err) {
        res.json({ err });
    }
};
const getPresale = async (req, res = response) => {
    try {
        const presales = await Presale.find({ $or: [{ status: true }] });
        res.json(presales);
    } catch (err) {
        res.json(err);
    }
};
const updatePresale = async (req, res = response) => {
    const data = req.body;
    try {
        await Presale.updateOne({_id:data._id},data);
        res.json({message:"Exitoso"});
    } catch (err) {
        res.json(err);
    }
}
const deletePresale = async (req, res = response) => {
    const data = req.body;
    try {
        await Presale.updateOne({_id:data._id},{status:false});
        res.json({message:"Exitoso"});
    } catch (err) {
        res.json(err);
    }
}
const getPresaleById = async (req=request, res = response)=>{
    const data = req.params;
    console.log(data);
    try {
        const presales = await Presale.find({$and: [{status:true},{sellerId:data.sellerId}]});
        res.json(presales);
    } catch (err) {
        res.json(err);
    }
}
module.exports = {
    postPresale,
    getPresale,
    updatePresale,
    deletePresale,
    getPresaleById
};
