(function() {
  'use strict';

  angular
    .module('app.task2')
    .directive('wordformatter', wordformatter);

  /* @ngInject */

  function wordformatter() {
    /* jshint ignore:start */
    return {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc
    };

    function linkFunc(scope, element, attrs, ctrl) {
      var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];//jscs:disable maximumLineLength
      var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

      function inWords(num) {
        if ((num = num.toString()).length > 9) {
          return 'overflow';
        }
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) {return;}
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        return str;
      }

      var func = function(viewValue) {
        var converted = viewValue.replace(/\d+/g, function(n) {
          return inWords(n);
        });
        return converted;
      };
      ctrl.$parsers.unshift(func);
    }
    /* jshint ignore:end */
  }

})();
