'use strict';
//API Express Route implementation for : {objectName}
/**
 * Get Verb : {objectName}
 */
exports.symbolgroups = function (req, res) {
  var MongoClient = require('mongodb')
    .MongoClient;
  MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, db) {
    if(!err) {
      var coll = db.collection('symbolgroups');
      coll.find()
        .toArray(function (err, items) {
          if(!err) {
            res.send(items);
          } else {
            console.log(err);
            res.send(500);
          }
        });
    } else {
      console.log(err);
      res.send(500);
    }
  });
};

exports.symbols = function (req, res) {
  var MongoClient = require('mongodb')
    .MongoClient;
  MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, db) {
    if(!err) {
      var coll = db.collection('symbols');
      coll.find({
        groupId: req.params.id
      })
        .toArray(function (err, items) {
          if(!err) {
            res.send(items);
          } else {
            console.log(err);
            res.send(500);
          }
        });
    }
  });
};