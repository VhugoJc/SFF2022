const { response, request, json } = require('express');
const Team = require('../models/team');


const postTeam = async (req = request, res = response) => {
    const {name,description,socialMedia,imgs,logo,status } = req.body;
    try{
        const newTeam = new Team({name,description,socialMedia,imgs,logo,status:true});
        await newTeam.save();
        res.json({team:newTeam});
    }catch(err){
        res.json({err});
    }

}
const getTeams =  async (req = request, res = response) =>{
    try{
        const myTeams = await Team.find({$or:[{status:true}]}); // filter: status = true 
        res.json(myTeams);
    }catch(err){
        res.json({err});
    }
}
const updateTeam = async (req=request,res=response) =>{
    const data = req.body; //team object complete with all data which will be changed
    console.log(data);
    try {
        await Team.updateOne({_id:data._id},data);
        res.json({message:"Exitoso"});
    } catch (err) {
        res.json(err);
    }
}
const deleteTeam = async (req=request, res=response)=>{
    const {_id} = req.body;
    try {
        await Team.updateOne({_id:_id},{status:false});
        res.json({message:"Exitoso"});
    } catch (err) {
        res.json(err);
    }
}
const getTeamsById =  async (req = request, res = response) =>{
    const {id} = req.params;
    try{
        const myTeams = await Team.findOne({$and:[{status:true},{_id:id}]}); // filter: status = true 
        res.json(myTeams);
    }catch(err){
        res.json({err});
    }
}
module.exports={
    postTeam, getTeams, updateTeam, deleteTeam,getTeamsById
}