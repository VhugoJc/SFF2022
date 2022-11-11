const {Router} = require('express');
const {saleWithQR, postSale, getMyPresales, mytotalSales, myWeekSales, myTodaySales, myTeamSales, myPresaleStadistic} = require('../controllers/sale');
const { jwtAdminValidator, jwtValidator } = require('../middleware/jwt-validator');
const router = Router();
// Route: /api/sale

router.post('/',jwtAdminValidator,saleWithQR);
router.post('/newsale',jwtAdminValidator,postSale);
router.get('/user',jwtValidator,getMyPresales);

router.get('/total-team',jwtAdminValidator,mytotalSales);

router.get('/my-team',jwtAdminValidator,myTeamSales);

router.get('/presale-stadistic/:id',jwtAdminValidator,myPresaleStadistic);

module.exports=router;