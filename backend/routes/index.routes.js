var express = require('express');
var router = express.Router();

let user = require('./user.routes');

// Routes
router.use('/user', user);

module.exports = router;