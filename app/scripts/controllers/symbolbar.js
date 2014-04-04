'use strict';
angular.module('workspaceApp')
  .controller('symbolsBarCtrl', function ($scope, $http) {
    $http.get('/api/symbolgroups')
      .success(function (groups) {
        $scope.groups = groups;
      });
    $scope.getGroupElements = function (group) {
      if(!group.elements) {
        group.elements = [];
        $http.get('/api/symbolgroup/' + group.groupId + '/symbols')
          .success(function (symbols) {
            group.elements = symbols;
          });
      }
    };
  });