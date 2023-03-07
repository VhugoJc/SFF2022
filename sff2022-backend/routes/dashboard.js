const {Router} = require('express');
const { check } = require('express-validator');
const { postPresale, getPresale, updatePresale, deletePresale } = require('../controllers/presale');

const {
    postTeam, 
    getTeams, 
    updateTeam,
    deleteTeam
}= require('../controllers/team'); // teamsController


const { postSeller, getSellers, updateSellers, deleteUser } = require('../controllers/user');
const { fieldsValidation } = require('../middleware/fieldsValidation');



//Route: /api/dashboard
const router = Router();
// dashboard routes works with other controller file

//team
router.post('/team',postTeam);//create new team     [Dashboard]
router.get('/team',getTeams);//get active teams     [Dashboard]
router.put('/team',updateTeam);//update team        [Dashboard]
router.delete('/team',deleteTeam);//set status team [Dashboard]

//seller
router.post('/seller',[
    check('email','El correo no es valido').isEmail(),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('lastname','El apellido es obligatorio').not().isEmpty(),
    check('password','La contraseña debe ser mayor a 6 letras').isLength({min:6}),
    fieldsValidation
],postSeller);               //create new seller     [Dashboard]

router.get('/seller',getSellers);//get active sellers     [Dashboard]
router.put('/seller',updateSellers);//update seller     [Dashboard]
router.delete('/seller',deleteUser);//update seller     [Dashboard]

//presales
router.post('/presale',postPresale); //create new presale     [Dashboard]
router.get('/presale',getPresale); //get active presale     [Dashboard]
router.put('/presale',updatePresale); //create new presale     [Dashboard]
router.delete('/presale',deletePresale); //create new presale     [Dashboard]




module.exports = router;