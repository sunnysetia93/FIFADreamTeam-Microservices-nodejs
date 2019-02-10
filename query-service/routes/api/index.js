const route = require('express').Router();
const passport = require('../../auth/passport');

route.use(passport.authenticate('bearer'));    // ['bearer','session']

module.exports = route;