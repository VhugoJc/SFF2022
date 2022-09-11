const {Router} = require('express');
const {saleWithQR} = require('../controllers/sale');
const { jwtAdminValidator } = require('../middleware/jwt-validator');
const router = Router();

router.post('/',jwtAdminValidator,saleWithQR);

module.exports=router;