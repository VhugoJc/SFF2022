const {Router} = require('express');
const { postPresale, getPresale, getPresaleById } = require('../controllers/presale');
const router = Router();
//Route: /api/presale

router.post('/',postPresale);//create new presale  [Manual Process]
router.get('/',getPresale);//create new presale  [Manual Process]
router.get('/:sellerId',getPresaleById);//create new presale  [Manual Process]

module.exports = router;