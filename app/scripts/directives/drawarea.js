'use strict';
angular.module('workspaceApp')
  .directive('drawarea', function () {
    return {
      template: "<circle id='cr1' cx='100' cy='50' r='50' style='fill:green;'></circle>",
      link: function (scope, element) {
        var SVGRoot = element[0];
        var TrueCoords = SVGRoot.createSVGPoint();
        var GrabPoint = SVGRoot.createSVGPoint();
        var DragTarget = null;
        
        function GetTrueCoords(evt) {
          var newScale = SVGRoot.currentScale;
          var translation = SVGRoot.currentTranslate;
          TrueCoords.x = (evt.clientX - translation.x) / newScale;
          TrueCoords.y = (evt.clientY - translation.y) / newScale;
        }

        function initDrag(evt) {
          var targetElement = evt.target;
          DragTarget = targetElement;
          DragTarget.parentNode.appendChild(DragTarget);
          DragTarget.setAttributeNS(null, 'pointer-events', 'none');
          var transMatrix = DragTarget.getCTM();
          GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
          GrabPoint.y = TrueCoords.y - Number(transMatrix.f);
        }

        function Drag(evt) {
          GetTrueCoords(evt);
          if(DragTarget) {
            var newX = TrueCoords.x - GrabPoint.x;
            var newY = TrueCoords.y - GrabPoint.y;
            DragTarget.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
          }
        }

        function endDrag() {
          if(DragTarget) {
            DragTarget.setAttributeNS(null, 'pointer-events', 'all');
            DragTarget = null;
          }
        }
        
        SVGRoot.onmousedown = initDrag;
        SVGRoot.onmousemove = Drag;
        SVGRoot.onmouseup = endDrag;

      }
    };
  });