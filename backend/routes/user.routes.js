var express = require('express');
var router = express.Router();

let service = require('../service/user.service');

router.post('/create', service.create);

module.exports = router;