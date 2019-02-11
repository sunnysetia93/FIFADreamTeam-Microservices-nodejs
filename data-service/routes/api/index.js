const route = require('express').Router();

route.use('/player',require('./players'));
route.use('/club',require('./clubs'));

module.exports = route;