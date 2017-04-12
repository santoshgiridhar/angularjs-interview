(function() {
  'use strict';

  angular
    .module('app.task1')
    .controller('Task1Controller', Task1Controller);

  Task1Controller.$inject = ['logger'];
  /* @ngInject */
  function Task1Controller(logger) {
    var vm = this;
    vm.title = 'Task 1';

    // activate();
    //
    // function activate() {
    //   logger.info('Activated Task1 View');
    // }
  }
})();
