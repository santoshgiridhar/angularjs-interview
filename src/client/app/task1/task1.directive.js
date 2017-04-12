(function() {
  'use strict';

  angular
    .module('app.task1')
    .directive('formatter', formatter);

  /* @ngInject */
  function formatter() {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: linkFunc
      };

      function linkFunc(scope, element, attrs, ctrl) {

        function numToChar(number) {
          var numeric = (number - 1) % 26;
          var letter = chr(65 + numeric);
          var number2 = parseInt((number - 1) / 26);
          if (number2 > 0) {
            return numToChar(number2) + letter;
          } else {
            return letter;
          }
        }

        function chr(codePt) {
          if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));// jshint ignore:line
          }
          return String.fromCharCode(codePt);
        }

        var func = function(viewValue) {
          var converted = numToChar(viewValue);
          return converted;
        };

        ctrl.$parsers.unshift(func);

      }

    }

})();
