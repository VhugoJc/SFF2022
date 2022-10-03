const {Router} = require('express');
const { postProduct } = require('../controllers/product');
const { jwtAdminValidator } = require('../middleware/jwt-validator');
const router = Router();
//Route: /api/product

router.post('/',jwtAdminValidator,postProduct);//create new product  [Manual Process]

module.exports = router;