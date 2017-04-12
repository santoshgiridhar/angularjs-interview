(function() {
  'use strict';

  angular
    .module('app.task4')
    .controller('Task4Controller', Task4Controller);

  Task4Controller.$inject = ['logger'];
  /* @ngInject */
  function Task4Controller(logger) {
    var vm = this;
    vm.title = 'Task 4';

    // activate();
    //
    // function activate() {
    //   logger.info('Activated Task4 View');
    // }
  }
})();
