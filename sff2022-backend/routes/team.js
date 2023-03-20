const {Router} = require('express');
const { postTeam, getTeams } = require('../controllers/team');
const router = Router();
//Route: /api/team

router.post('/',postTeam);//create new team [Manual Process]
router.get('/',getTeams);//get team

module.exports = router;