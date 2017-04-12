(function() {
  'use strict';

  angular
    .module('app.task1')
    .controller('Task1Controller', Task1Controller);

  /* @ngInject */
  function Task1Controller(logger) {
    var vm = this;
    vm.title = 'Task 1';
  }
})();
