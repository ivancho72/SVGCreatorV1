'use strict';

angular.module('workspaceApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Symbols',
      'link': '/symbols'
    },{
      'title': 'About',
      'link': '/about'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
