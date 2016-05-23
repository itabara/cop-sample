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
