'use strict';
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, CommService) {
    function onSymbolSelected(symbol) {
      if($scope.addElementToDrawArea) {
        $scope.addElementToDrawArea(symbol.graph);
      }
    }
    CommService.subscribe('SYMBOL_SELECTED', 'MAINCTRL', onSymbolSelected);
  });