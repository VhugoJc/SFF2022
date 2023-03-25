const { request, response } = require("express");
const Settings = require("../models/settings");

const postSettings = async (req = request, res = response) => {
    const data = req.body; // sponsors, events
    const query = { name: "Settings" };
    const update = { $set: data};
    const options = { upsert: true }; //performing an Upsert
    
    try {
        await Settings.updateOne(query, update, options);
        res.json({ message: "Exitoso" });
    } catch (err) {
        res.json(err);
    }
};
//get all settings
const getSettings=async(req=request,res=response)=>{
    const query = { name: "Settings" };
    try {
        const mySettings = await Settings.findOne(query);
        res.json({settings:mySettings});
    } catch (error) {
        res.json(error);
    }
}

// get specific fields
const getEvents=async(req=request,res=response)=>{
    const query = { name: "Settings" };
    try {
        const mySettings = await Settings.findOne(query);
        res.json({events:mySettings.events});
    } catch (error) {
        res.json(error);
    }
}
const getSponsors=async(req=request,res=response)=>{
    const query = { name: "Settings" };
    try {
        const mySettings = await Settings.findOne(query);
        res.json({sponsors:mySettings.sponsors});
    } catch (error) {
        res.json(error);
    }
}

module.exports={
    getEvents,
    postSettings,
    getSponsors,
    getSettings
}