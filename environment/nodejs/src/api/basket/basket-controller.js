'use strict';

var os = require("os");
var port = process.env.PORT || 3000;
var hostname = os.hostname();

var basketDAO = require('../../helpers/basketDAO');

// Get a single basket by id
exports.hello = function(req, res) {
   res.send('<html><body>Hello from Node.js container: ' + hostname +
      '<br>Port is: ' + port + '</body></html>');
}

exports.addBasket = function(req, res) {
  var basket = {
    "refNumber": req.body.refNumber
  };

  // add some sanitization of basket object
  basketDAO.addBasket(basket, function(err, result){
    if (err){
      return handleError(res, err);
    }
    return res.status(201).json(result);
  });
}

function handleError(res, err) {
  return res.status(500).send(err);
}
