'use strict';

var express = require('express');
var config = require('./environment');
var bodyParser = require('body-parser');
var compression = require('compression');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var passport = require('passport');

module.exports = function(app){
  var env = app.get('env');
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
}
