'use strict';
var dbHelper = require('../../helpers/dbhelper');

//API Express Route implementation for : symbolgroups
/**
 * Get Verb : symbolgroups
 */
exports.symbolgroups = function (req, res) {
  dbHelper.getFilteredCollection('symbolgroups', {}, function (err, items) {
    if(!err) {
      res.send(items);
    } else {
      res.send(500);
    }
  });
};
exports.symbols = function (req, res) {
  dbHelper.getFilteredCollection('symbols', {
    groupId: req.params.id
  }, function (err, items) {
    if(!err) {
      res.send(items);
    } else {
      res.send(500);
    }
  });
};
exports.postSymbolgroup = function(req, res){
  dbHelper.saveDocument('symbolgroups', req.body, function(err, record){
    if(err){
      res.send(500);
    }else if(record === 1){
      res.send(req.body);
    }else{
      res.send(record);
    }
  });
};
exports.postSymbol = function(req, res){
  dbHelper.saveDocument('symbols', req.body, function(err, record){
    if(err){
      res.send(500);
    }else if(record === 1){
      res.send(req.body);
    }else{
      res.send(record);
    }
  });
};
exports.deleteSymbolgroup = function(req, res){
  dbHelper.removeDocument('symbolgroups', req.body, function(err, record){
    if(err){
      res.send(500);
    }else if(record === 1){
      res.send(204);
    }else{
      res.send(410);
    }
  });
};
exports.deleteSymbol = function(req, res){
  dbHelper.removeDocument('symbols', req.body, function(err, record){
    if(err){
      res.send(500);
    }else if(record === 1){
      res.send(204);
    }else{
      res.send(410);
    }
  });
};