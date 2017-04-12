(function() {
  'use strict';

  angular
    .module('app.task1')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'task1',
        config: {
          url: '/',
          templateUrl: 'app/task1/task1.html',
          controller: 'Task1Controller',
          controllerAs: 'vm',
          title: 'Task 1'
        }
      }
    ];
  }
})();
