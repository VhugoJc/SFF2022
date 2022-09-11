const { response, request } = require('express');
const Team = require('../models/team');


const postTeam = async (req = request, res = response) => {
    const {name,description,socialMedia,imgs,logo,status } = req.body;
    try{
        const newTeam = new Team({name,description,socialMedia,imgs,logo,status});
        await newTeam.save();
        res.json({team:newTeam});
    }catch(err){
        res.json({err});
    }

}

module.exports={
    postTeam
}