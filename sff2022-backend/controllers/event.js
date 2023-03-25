const { request, response } = require("express");
const Settings = require("../models/settings");

const postEvent = async (req = request, res = response) => {
    const { events } = req.body;

    const query = { name: "Settings" };
    const update = { $set: { events } };
    const options = { upsert: true }; //performing an Upsert
    
    try {
        await Settings.updateOne(query, update, options);
        res.json({ message: "Exitoso" });
    } catch (err) {
        res.json(err);
    }
};

const getEvents=async(req=request,res=response)=>{
    const query = { name: "Settings" };
    try {
        const mySettings = await Settings.findOne(query);
        res.json({events:mySettings.events});
    } catch (error) {
        res.json(error);
    }
}

module.exports={
    postEvent,
    getEvents
}