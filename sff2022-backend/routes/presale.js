const {Router} = require('express');
const { postPresale, getPresale, getPresaleBSelleryId, getPresaleById } = require('../controllers/presale');
const router = Router();
//Route: /api/presale

router.post('/',postPresale);//create new presale  [Manual Process]
router.get('/',getPresale);//create new presale  [Manual Process]
router.get('/:sellerId',getPresaleBSelleryId);//get presales by sellerId
router.get('/byid/:id',getPresaleById);//get presales by sellerId

module.exports = router;