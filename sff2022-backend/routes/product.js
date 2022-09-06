const {Router} = require('express');
const { postProduct } = require('../controllers/product');
const router = Router();
//Route: /api/product

router.post('/',postProduct);//create new product  [Manual Process]

module.exports = router;