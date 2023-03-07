const { response } = require('express');

const postDashboardTeam = async (req, res = response) =>{
    console.log(req);
    res.json({message:"Recivido"});
}

module.exports={
    postDashboardTeam
}