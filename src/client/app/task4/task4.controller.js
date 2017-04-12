(function() {
  'use strict';

  angular
    .module('app.task4')
    .controller('Task4Controller', Task4Controller);

  /* @ngInject */
  function Task4Controller(logger) {
    var vm = this;
    vm.title = 'Task 4';
  }
})();
