var dbUtils = require("../config/dbUtils");

exports.addBasket = function(basket, callback){
  var db = dbUtils.db();
  var collection = db.collection('basket');

  // let's insert in the collection
  collection.insertOne(basket, function(err, result){
    if (err){
      console.log("Error:" + err);
    }
    callback(err, result);
  });
};

exports.getBasket = function(filter, callback){
  var db = dbUtils.db();
  var collection = db.collection('basket');

  console.log('The filter: ', filter);
  // let's retrieve by filter
  collection.find(filter).toArray(function(err, result){
    if (err){
      console.log('Error: ', err);
    }
    console.log('Retrieved: ', result);
    callback(err, result);
  });
}
