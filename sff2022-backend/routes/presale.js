const {Router} = require('express');
const { postPresale } = require('../controllers/presale');
const router = Router();
//Route: /api/product

router.post('/',postPresale);//create new presale  [Manual Process]

module.exports = router;