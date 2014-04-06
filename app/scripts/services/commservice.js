'use strict';

angular.module('workspaceApp')
  .service('CommService', function CommService() {
    var cache = {};
    return {
      publish: function (topicName, args) {
        if(cache[topicName]) {
          for(var i in cache[topicName].listeners) {
            cache[topicName].listeners[i].caller(args);
          }
        }
      },
      subscribe: function (topicName, subId, callback) {
        if(!cache[topicName]) {
          cache[topicName] = {
            listeners: []
          };
        }
        this.unsubscribe(topicName, subId);
        cache[topicName].listeners.push({
          caller: callback,
          subId: subId
        });
      },
      unsubscribe: function (topicName, subscriptionId) {
        if(cache[topicName]) {
          var newListeners = cache[topicName].listeners.filter(function (subElement) {
            return subElement.subId !== subscriptionId;
          });
          cache[topicName].listeners = newListeners;
        }
      }
    };
  });