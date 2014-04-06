'use strict';
var MONGODBCNX = 'mongodb://svgcreatorapp:A234B2093HP03@oceanic.mongohq.com:10010/app23736959';
var connectToCollection = function (collectionName, callback) {
  var coll = null;
  var MongoClient = require('mongodb')
    .MongoClient;
  MongoClient.connect(MONGODBCNX, function (err, db) {
    if(!err) {
      coll = db.collection(collectionName);
    }
    callback(err, coll);
  });
};
exports.getFilteredCollection = function (collectionName, filter, callback) {
  connectToCollection(collectionName, function (err, coll) {
    if(!err) {
      coll.find(filter)
        .toArray(function (err, items) {
          if(err) {
            console.log(err);
          }
          callback(err, items);
        });
    } else {
      callback(err, null);
    }
  });
};
exports.saveDocument = function (collectionName, doc, callback) {
  connectToCollection(collectionName, function (err, coll) {
    if(!err) {
      coll.save(doc, {
        w: 1
      }, function (err, record) {
        if(err) {
          console.log(err);
        }
        callback(err, record);
      });
    }
  });
};
exports.removeDocument = function (collectionName, doc, callback) {
  connectToCollection(collectionName, function (err, coll) {
    if(!err) {
      coll.remove(doc, {
        w: 1
      }, function (err, record) {
        if(err) {
          console.log(err);
        }
        callback(err, record);
      });
    }
  });
};