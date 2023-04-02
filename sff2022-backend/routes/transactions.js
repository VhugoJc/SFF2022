const { Router } = require("express");
const { getTransactionsData, getTransactionsTeam } = require("../controllers/transactions");
const router = Router();
// /api/transactions
router.get('/',getTransactionsData);
router.get('/teams',getTransactionsTeam);

module.exports = router;