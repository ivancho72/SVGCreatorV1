'use strict';

angular.module('workspaceApp')
  .directive('svgdata', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element[0].innerHTML = attrs.svgdata;
      }
    };
  });
