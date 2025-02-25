const router = require('express').Router();
const passport = require('passport');
const controller = require('../controllers')
const authenticate = passport.authenticate('jwt', { session: false })

router.post('/login', controller.authentication.login);

router.post('/register', controller.authentication.createUser);


//use authenticate as middleware for protected routes

module.exports = router;