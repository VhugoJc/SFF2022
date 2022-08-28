const {Router} = require('express');
const router = Router();
const {login, UsrTokenValidator, confirmEmail } = require('../controllers/auth');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middleware/fieldsValidation');
const { jwtValidator } = require('../middleware/jwt-validator');

// Route: /api/auth

router.post('/login',login);

router.get('/',[
    jwtValidator
], UsrTokenValidator );

router.put('/confirm-email',[
    check('token','El token está vacío').not().isEmpty(),
    fieldsValidation
],confirmEmail);

module.exports = router;