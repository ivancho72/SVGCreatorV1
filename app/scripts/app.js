'use strict';

angular.module('workspaceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl'
      })
      .when('/symbols', {
        templateUrl: 'partials/symbols',
        controller: 'SymbolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });