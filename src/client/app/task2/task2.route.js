(function() {
  'use strict';

  angular
    .module('app.task2')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'task2',
        config: {
          url: '/task2',
          templateUrl: 'app/task2/task2.html',
          controller: 'Task2Controller',
          controllerAs: 'vm',
          title: 'Task 2'
        }
      }
    ];
  }
})();
