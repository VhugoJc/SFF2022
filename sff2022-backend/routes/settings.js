const {Router} = require('express');
const { postEvent, getEvents, postSponsor, postSettings, getSponsors, getSettings } = require('../controllers/settings');
const router = Router();
//Route: /api/event

router.put('/event',postSettings);//add events (Modify in settings model)
router.get('/event',getEvents);//get events

router.put('/sponsor',postSettings);//add sponsors (Modify in settings model)
router.get('/sponsor',getSponsors);//get sponsors

router.get('/',getSettings);//get all settings
module.exports = router;