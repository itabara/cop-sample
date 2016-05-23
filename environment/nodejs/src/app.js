'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var config = require('./config/environment');
var os = require('os');

var hostname = os.hostname();

// Setup server
var app = express();
var server = require('http').createServer(app);

// DB connection and config
require('./config/dbUtils')(config);

// Express configuration
require('./config/express')(app);
// Route configuration
require('./routes')(app);

// Start the server
server.listen(config.port, config.ip, function(){
  console.log('COP-API server running on http://%s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

exports = module.exports = app;
