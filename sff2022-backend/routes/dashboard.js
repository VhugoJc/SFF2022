const {Router} = require('express');
const { postDashboardTeam } = require('../controllers/dashboard');

const {
    postTeam, 
    getTeams, 
    updateTeam,
    deleteTeam
}= require('../controllers/team'); // teamsController



const router = Router();
//Route: /api/dashboard

// dashboard routes works with other controller file

router.post('/team',postTeam);//create new team     [Dashboard]
router.get('/team',getTeams);//get active teams     [Dashboard]
router.put('/team',updateTeam);//update team        [Dashboard]
router.delete('/team',deleteTeam);//set status team    [Dashboard]



module.exports = router;