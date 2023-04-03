const { Router } = require("express");
const { getTransactionsData, getTransactionsTeam, getAllTransactions } = require("../controllers/transactions");
const router = Router();
// /api/transactions
router.get('/',getTransactionsData);
router.get('/teams',getTransactionsTeam);
router.get('/all',getAllTransactions);

module.exports = router;