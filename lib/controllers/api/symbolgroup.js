'use strict';

var MONGODBCNX = 'mongodb://svgcreatorapp:A234B2093HP06@oceanic.mongohq.com:10010/app23736959';
var LOCALDBCNX = 'mongodb://127.0.0.1:27017/mydb';

//API Express Route implementation for : {objectName}
/**
 * Get Verb : {objectName}
 */
exports.symbolgroups = function (req, res) {
  var MongoClient = require('mongodb')
    .MongoClient;
  MongoClient.connect(MONGODBCNX, function (err, db) {
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
  MongoClient.connect(MONGODBCNX, function (err, db) {
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