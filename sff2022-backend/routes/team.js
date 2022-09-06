const {Router} = require('express');
const { postTeam } = require('../controllers/team');
const router = Router();
//Route: /api/team

router.post('/',postTeam);//create new team [Manual Process]

module.exports = router;