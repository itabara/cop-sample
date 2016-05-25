'use strict';

var express    = require('express');
var controller = require('./basket-controller');

var router     = express.Router();

router.get('/', controller.hello);
router.post('/', controller.addBasket);
router.get('/:refNumber', controller.getBasket);

module.exports = router;
