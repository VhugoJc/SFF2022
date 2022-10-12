const {Router} = require('express');
const { postProduct, getProducts } = require('../controllers/product');
const { jwtAdminValidator } = require('../middleware/jwt-validator');
const router = Router();
//Route: /api/product

router.post('/',jwtAdminValidator,postProduct);//create new product  [Manual Process]
router.get('/',jwtAdminValidator,getProducts); // get my products
module.exports = router;