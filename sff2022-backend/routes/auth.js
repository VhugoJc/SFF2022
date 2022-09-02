const { Router } = require('express');
const router = Router();
const { login, UsrTokenValidator, confirmEmail, passwordRecovery,resetPassword } = require('../controllers/auth');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middleware/fieldsValidation');
const { jwtValidator } = require('../middleware/jwt-validator');

// Route: /api/auth

router.post('/login', login);

router.get('/', [
    jwtValidator
], UsrTokenValidator);

router.put('/confirm-email', [
    check('token', 'El token está vacío').not().isEmpty(),
    fieldsValidation
], confirmEmail);

router.put('/password-recovery', [
    check('email', 'Correo electrónico incorrecto').isEmail(),
    fieldsValidation
], passwordRecovery);

router.post('/reset-password', [
    jwtValidator,
    check('newPassword', 'La contraseña debe ser mayor a 6 letras').isLength({ min: 6 }),
    fieldsValidation
], resetPassword)

module.exports = router;