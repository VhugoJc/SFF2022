const {Router} = require('express');
const router = Router();
const {login, UsrTokenValidator } = require('../controllers/auth');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middleware/fieldsValidation');
const { jwtValidator } = require('../middleware/jwt-validator');

router.post('/login',login);
router.get('/',[
    jwtValidator
], UsrTokenValidator );

module.exports = router;