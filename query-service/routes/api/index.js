const route = require('express').Router();
const passport = require('../../auth/passport');

route.use(passport.authenticate('bearer'));    // ['bearer','session']

route.use('/player',require('./players'));
route.use('/club',require('./clubs'));

module.exports = route;