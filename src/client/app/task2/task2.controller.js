(function() {
  'use strict';

  angular
    .module('app.task2')
    .controller('Task2Controller', Task2Controller);

  Task2Controller.$inject = ['logger'];
  /* @ngInject */
  function Task2Controller(logger) {
    var vm = this;
    vm.title = 'Task 2';

    // activate();
    //
    // function activate() {
    //   logger.info('Activated Task2 View');
    // }
  }
})();
