'use strict';

var MongoClient = require('mongodb').MongoClient;
var db;

module.exports = function(config){
    MongoClient.connect(config.mongo.uri, function(err, database){
      if (err){
        console.log("Cannot connect to database:" + config.mongo.uri);
      }
      else{
        console.log("Connected to database: " + config.mongo.uri);
        db = database;
      }
    });
};

module.exports.db = function(){
  return db;
}
