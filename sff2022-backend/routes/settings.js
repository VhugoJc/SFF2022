const {Router} = require('express');
const { postEvent, getEvents, postSponsor, postSettings, getSponsors, getSettings, getSettingsData } = require('../controllers/settings');
const router = Router();
//Route: /api/event

router.put('/event',postSettings);//add events (Modify in settings model)
router.get('/event',getEvents);//get events

router.put('/sponsor',postSettings);//add sponsors (Modify in settings model)
router.get('/sponsor',getSponsors);//get sponsors

router.put('/',postSettings); // add webSite, logo, date, homeData
router.get('/',getSettings);//get all settings 
router.get('/data',getSettingsData);//get all settings 
module.exports = router;