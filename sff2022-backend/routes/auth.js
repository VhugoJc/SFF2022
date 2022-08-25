const {Router} = require('express');
const router = Router();
const {login } = require('../controllers/auth');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middleware/fieldsValidation');

router.post('/login',login);
module.exports = router;