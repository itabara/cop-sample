'use strict';

var os       = require("os");
var port     = process.env.PORT || 3000;
var hostname = os.hostname();

var basketDAO = require('../../helpers/basketDAO');

exports.hello = function(req, res) {
   res.send('<html><body>Hello from Node.js container: ' + hostname +
      '<br>Port is: ' + port + '</body></html>');
}

// Add a single basket
exports.addBasket = function(req, res) {
  var basket = {
    refNumber  : req.body.refNumber,
    productName: req.body.productName
  };

  // TODO: add some sanitization of basket object
  // use checker ?

  basketDAO.addBasket(basket, function(err, result){
    if (err){
      return handleError(res, err);
    }
    return res.status(201).json(result);
  });
}

exports.getBasket = function(req, res){
  var filter = {
    refNumber: req.params.refNumber
  };

  console.log("Filter: ", filter);
  basketDAO.getBasket(filter, function(err, result){
    if (err){
      return handleError(res, err);
    }
    return res.status(200).json(result);
  })
}

function handleError(res, err) {
  return res.status(500).send(err);
}
