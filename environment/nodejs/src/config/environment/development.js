'use strict';

var MONGO_ADDR = process.env.MONGO_PORT_27017_TCP_ADDR || '192.168.99.100';
var MONGO_PORT = process.env.MONGO_PORT_27017_TCP_PORT || 27017;

// Development specific configuration
module.exports = {

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Server port
  port: process.env.PORT || 3000,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://' + MONGO_ADDR + ':' + MONGO_PORT + '/cop-dev'
  }
};
