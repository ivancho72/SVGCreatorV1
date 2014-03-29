'use strict';

var selectedElement = 0;
var currentMatrix = 0;
var currentX = 0;
var currentY = 0;

function moveElement(evt) {
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentMatrix[4] += dx;
  currentMatrix[5] += dy;
  var newMatrix = 'matrix(' + currentMatrix.join(' ') + ')';
  selectedElement.setAttributeNS(null, 'transform', newMatrix);
  currentX = evt.clientX;
  currentY = evt.clientY;
}

function deselectElement() {
  if(selectedElement !== 0) {
    selectedElement.removeAttributeNS(null, 'onmousemove');
    selectedElement.removeAttributeNS(null, 'onmouseout');
    selectedElement.removeAttributeNS(null, 'onmouseup');
    selectedElement = 0;
  }
}
angular.module('workspaceApp')
  .directive('drawarea', function () {
    return {
      template: "<svg><circle id='c1' cx='50' cy='50' r='10' stroke='#000' transform='matrix(1,0,0,1,477,62)' style='-webkit-tap-highlight-color: rgba(0, 0, 0, 0);'></circle></svg>",
      link: function postLink(scope, element) {

        function selectElement(evt) {
          selectedElement = evt.target;
          currentX = evt.clientX;
          currentY = evt.clientY;
          currentMatrix = selectedElement.getAttributeNS(null, 'transform')
            .slice(7, -1)
            .split(' ');
          for(var i = 0; i < currentMatrix.length; i++) {
            currentMatrix[i] = parseFloat(currentMatrix[i]);
          }
          selectedElement.setAttributeNS(null, 'onmousemove', 'moveElement(evt)');
          selectedElement.setAttributeNS(null, 'onmouseout', 'deselectElement()');
          selectedElement.setAttributeNS(null, 'onmouseup', 'deselectElement()');
        }
        
        var te = element[0].childNodes[0].childNodes.c1;
        te.style.fill = 'pink';
        te.setAttributeNS(null, 'transform', 'matrix(1 0 0 1 0 0)');
        te.onmousedown = selectElement;
      }
    };
  });