var router = require('express').Router();
var controllers = require('../controllers/controllers.js');

router.post('/api/favorites', controllers.favorites.post);

router.get('/api/favorites', controllers.favorites.get);

router.delete('/api/favorites', controllers.favorites.delete);

router.get('/api/colleges', controllers.colleges.get);

router.post('/api/colleges/', controllers.colleges.getSuggestions);

router.post('/api/auth', controllers.auth.post);

router.post('/signup', controllers.signup.post);

router.post('/api/login', controllers.login.post);

router.post('/logout', controllers.logout.post);

module.exports = router;