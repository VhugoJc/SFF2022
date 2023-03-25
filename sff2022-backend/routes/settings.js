const {Router} = require('express');
const { postEvent, getEvents } = require('../controllers/event');
const router = Router();
//Route: /api/event

router.put('/event',postEvent);//add events (Modify in settings model)
router.get('/event',getEvents);//get events
module.exports = router;