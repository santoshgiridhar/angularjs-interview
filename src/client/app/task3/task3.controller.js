(function() {
  'use strict';

  angular
    .module('app.task3')
    .controller('Task3Controller', Task3Controller);

  Task3Controller.$inject = ['logger'];
  /* @ngInject */
  function Task3Controller(logger) {
    var vm = this;
    vm.title = 'Task 3';
  }
})();
