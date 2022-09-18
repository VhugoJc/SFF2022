const {Router} = require('express');
const {saleWithQR, postSale, getMyPresales, mytotalSales, myWeekSales} = require('../controllers/sale');
const { jwtAdminValidator, jwtValidator } = require('../middleware/jwt-validator');
const router = Router();
// Route: /api/sale

router.post('/',jwtAdminValidator,saleWithQR);
router.post('/newsale',jwtAdminValidator,postSale);
router.get('/user',jwtValidator,getMyPresales);

router.get('/total-team',jwtAdminValidator,mytotalSales);
router.get('/week-team',jwtAdminValidator,myWeekSales);

module.exports=router;