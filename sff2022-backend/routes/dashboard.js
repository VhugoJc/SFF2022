const {Router} = require('express');
const { check } = require('express-validator');
const { postPresale, getPresale, updatePresale, deletePresale } = require('../controllers/presale');

const {
    postTeam, 
    getTeams, 
    updateTeam,
    deleteTeam
}= require('../controllers/team'); // teamsController


const { postSeller, getSellers, updateSellers, deleteUser, postSuperSeller, validUser } = require('../controllers/user');
const { fieldsValidation } = require('../middleware/fieldsValidation');
const { loginAdmin } = require('../controllers/auth');
const { jwtSprAdminValidator } = require('../middleware/jwt-validator');



//Route: /api/dashboard
const router = Router();
// dashboard routes works with other controller file

//team
router.post('/team',jwtSprAdminValidator, postTeam);//create new team     [Dashboard]
router.get('/team',jwtSprAdminValidator, getTeams);//get active teams     [Dashboard]
router.put('/team',jwtSprAdminValidator,updateTeam);//update team        [Dashboard]
router.delete('/team',jwtSprAdminValidator,deleteTeam);//set status team [Dashboard]

//seller
router.post('/seller',jwtSprAdminValidator,[
    check('email','El correo no es valido').isEmail(),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('lastname','El apellido es obligatorio').not().isEmpty(),
    check('password','La contraseña debe ser mayor a 6 letras').isLength({min:6}),
    check('team','El Id del equipo es obligatorio').not().isEmpty(),
    fieldsValidation
],postSeller);               //create new seller     [Dashboard]

router.get('/seller',jwtSprAdminValidator, getSellers);//get active sellers     [Dashboard]
router.put('/seller',jwtSprAdminValidator, updateSellers);//update seller     [Dashboard]
router.delete('/seller',jwtSprAdminValidator, deleteUser);//update seller     [Dashboard]

//presales
router.post('/presale',jwtSprAdminValidator, [
    check('sellerId','El ID del equipo es obligatorio').not().isEmpty(),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('tortas','La cantidad de tortas es obligatoria').isNumeric(),
    check('cost','El costo es obligatorio').isNumeric(),
    fieldsValidation
],postPresale); //create new presale     [Dashboard]

router.get('/presale',jwtSprAdminValidator, getPresale); //get active presale     [Dashboard]
router.put('/presale',jwtSprAdminValidator, updatePresale); //create new presale     [Dashboard]
router.delete('/presale',jwtSprAdminValidator, deletePresale); //create new presale     [Dashboard]


//login
// router.post('/admin/new', postSuperSeller); //remove aftercreate new admin
router.post('/login', loginAdmin);
router.get('/admin/me',jwtSprAdminValidator,validUser);



module.exports = router;