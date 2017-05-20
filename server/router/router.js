var router = require('express').Router();
var controllers = require('../controllers/controllers.js');

router.get('/api/colleges', controllers.colleges.get);

router.post('/api/colleges/suggestions', controllers.colleges.getSuggestions);

router.get('/api/comments', controllers.comments.get);

router.get('/api/college', controllers.college.get);

module.exports = router;
