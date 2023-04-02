const { response, request } = require("express");
const User = require("../models/user");
const Sale = require("../models/sale");
const Team = require("../models/team");

const getTransactionsData = async (req = request, res = response) => {
    try {
        // get users amount
        const usersAmount = await User.find({ $and:[{role: "USER_ROLE"},{status:true} ]}).count();
        
        const tortasAmount = await Sale.aggregate([
            {
                $group: {
                    _id:null,
                    tortas:{$sum:"$tortasTotal"},// get tortas amount
                    balance:
                    {
                        $sum:{
                            $multiply:["$amount","$cost"] // get money amount
                        }
                    },
                    presales:{$sum:"$amount"}// get sold presales amount
                },
            },
        ]);
        res.json({
            users:usersAmount,
            tortas:tortasAmount[0].tortas,
            sales:tortasAmount[0].presales,
            balance:tortasAmount[0].balance
        });
    } catch (error) {
        res.json(error);
    }
};

const getTransactionsTeam = async (req=request, res=response)=>{
    try{
        const dataTeams = await Sale.aggregate([
            {
                $group:{
                    _id: "$SellerTeamId",
                    tortas:{$sum:"$tortasTotal"},// get tortas amount
                    balance:
                    {
                        $sum:{
                            $multiply:["$amount","$cost"] // get money amount
                        }
                    },
                    presales:{$sum:"$amount"}// get sold presales amount
                }
            }
        ]);
        const teams = await Team.find({$and:[{status:true}]});

        const data = dataTeams.map(item=>{
            return teams.find((itemTeam)=>itemTeam._id ===item._id)
        })

        console.log(data);
        res.json({
            transactionData: dataTeams,
            teams
        });

    }catch(err){
        res.json(err);
        console.log(err);
    }
}

module.exports = {
    getTransactionsData,
    getTransactionsTeam
};
