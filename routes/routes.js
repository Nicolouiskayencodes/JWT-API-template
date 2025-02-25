const router = require('express').Router();
const passport = require('passport');
const controllers = require('../controllers/')
const authenticate = passport.authenticate('jwt', { session: false })

router.post('/login', controllers.authentication.login);

router.post('/register', controllers.authentication.createUser);


//use authenticate as middleware for protected routes

module.exports = router;