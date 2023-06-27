const { response, request } = require("express");
const User = require("../models/user");
const Sale = require("../models/sale");
const Team = require("../models/team");

const getTransactionsData = async (req = request, res = response) => {
    try {
        // get users amount
        const usersAmount = await User.find({
            $and: [{ role: "USER_ROLE" }, { status: true }],
        }).count();
        const tortasAmount = await Sale.aggregate([
            {
                $group: {
                    _id: null,
                    tortas: { $sum: "$tortasTotal" }, // get tortas amount
                    balance: {
                        $sum: {
                            $multiply: ["$amount", "$cost"], // get money amount
                        },
                    },
                    presales: { $sum: "$amount" }, // get sold presales amount
                },
            },
        ]);
        res.json({
            users: usersAmount,
            tortas: tortasAmount[0].tortas,
            sales: tortasAmount[0].presales,
            balance: tortasAmount[0].balance,
        });
    } catch (error) {
        res.json(error);
    }
};

const getTransactionsTeam = async (req = request, res = response) => {
    try {
        const dataTeams = await Sale.aggregate([
            {
                $group: {
                    _id: "$SellerTeamId",
                    tortas: { $sum: "$tortasTotal" }, // get tortas amount
                    balance: {
                        $sum: {
                            $multiply: ["$amount", "$cost"], // get money amount
                        },
                    },
                    presales: { $sum: "$amount" }, // get sold presales amount
                },
            },
        ]);
        const teams = await Team.find({ $and: [{ status: true }] });

        const data = dataTeams.map((item) => {
            return {
                id:item._id,
                transaction:item,
                team: teams.find((itemTeam) => itemTeam._id .equals(item._id))
            };
        });
        res.json(data);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
};

const getAllTransactions = async (req = require, res = response) => {
    try {
        // const sales = await Sale.find({status:true});
        let sales = await Sale.find();
        let users = await User.find();
        const team = await Team.find();

        const data = await sales.map(item=>{
            return{
                _id:item._id,
                sale: item,
                usr: users.find(usr=>usr._id.equals(item.clientId)),
                seller: users.find(usr=>usr._id.equals(item.sellerMemberId)),
                team: team.find(tm=>tm._id.equals(item.SellerTeamId))
            }
        })
        res.json(data)
    } catch (error) {
        res.json(error);
    }
};
module.exports = {
    getTransactionsData,
    getTransactionsTeam,
    getAllTransactions,
};
