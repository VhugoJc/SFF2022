const {Router} = require('express');
const {saleWithQR, postSale} = require('../controllers/sale');
const { jwtAdminValidator } = require('../middleware/jwt-validator');
const router = Router();

router.post('/',jwtAdminValidator,saleWithQR);
router.post('/newsale',jwtAdminValidator,postSale);

module.exports=router;