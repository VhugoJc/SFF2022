const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const Presale = require('../models/presale');
const User = require('../models/user');
const Sale = require('../models/sale');
const moment = require('moment');


const postSale = async (req = request, res = response) => {
    const { clientId, presaleId, amount, cost } = req.body;
    const sellerMemberId = req.user._id;
    const SellerTeamId = req.user.team;
    console.log(clientId);


    try {
        const newSale = new Sale({ clientId, presaleId, amount, cost, sellerMemberId, SellerTeamId });
        await newSale.save();
        res.json({ newSale });
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

const saleWithQR = async (req = request, res = response) => {
    const admin = req.user;
    const { jwtSaleData } = req.body;
    try {
        const { presaleId, userId, amount } = jwt.verify(jwtSaleData, process.env.SECRETSALESKEY) //actualizar variables de entorno en testing
        const presale = await Presale.findById(presaleId);
        const user = await User.findById(userId);

        if (!user) { //validation: if user exists
            return res.status(400).json({ message: 'No se pudo encontrar al usuario' });
        }
        if (!presale) { //validation: if user exists
            return res.status(400).json({ message: 'No se pudo encontrar la preventa' });
        }

        if (!presale.sellerId.equals(admin.team)) {// validation: if the seller and the presale has the same team id 
            return res.status(400).json({ message: 'No Puedes registrar ventas que no son de tu equipo' });
        }


        const totalAmount = amount;
        res.json({ presale, user, totalAmount });
    } catch (err) {
        res.status(400).json({ message: 'No se encontró información con el presente código' });
        console.log(err);
    }
}

const getMyPresales = async (req = request, res = response) => {
    const { _id } = req.user;
    try {
        const presales = await Sale.find({ clientId: _id }).sort({ saleDate: -1 });
        res.json({ presales });
    } catch (err) {
        console.log(err);
        res.json({ msg: "error" })
    }

}

const mytotalSales = async (req = request, res = response) => {
    const { team } = req.user;
    let totalMoney = 0;
    try {
        const sales = await Sale.find({ SellerTeamId: team });
        if (sales.length <= 0) { // sales validation
            return res.json({ total: totalMoney });
        }
        sales.forEach(sale => {
            totalMoney += sale.cost
        });
        return res.json({ total: totalMoney });
    } catch (err) {
        return res.json({ message: 'Ha ocurrido un error' });
    }
}

const myWeekSales = async (req = request, res = response) => {
    const { team } = req.user;
    let totalMoney = 0;
    try {
        const sales = await Sale.find({ SellerTeamId: team });
        if (sales.length <= 0) { // sales validation
            return res.json({ total: totalMoney });
        }
        sales.forEach(sale => {
            const a = moment();
            const b = moment(sale.saleDate);
            if(a.diff(b, 'days')<7){
                totalMoney += sale.cost
            }
        });
        return res.json({ total: totalMoney });
    } catch (err) {
        return res.json({ message: 'Ha ocurrido un error' });
    }
}

module.exports = {
    saleWithQR,
    postSale,
    getMyPresales,
    mytotalSales,
    myWeekSales
}