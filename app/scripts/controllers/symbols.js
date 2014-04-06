'use strict';
angular.module('workspaceApp')
  .controller('SymbolsCtrl', function ($scope, $http) {
    $http.get('/api/symbolgroups')
      .success(function (groups) {
        $scope.groups = groups;
      });
  });