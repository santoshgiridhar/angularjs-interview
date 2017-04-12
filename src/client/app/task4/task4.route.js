(function() {
  'use strict';

  angular
    .module('app.task4')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'task4',
        config: {
          url: '/task4',
          templateUrl: 'app/task4/task4.html',
          controller: 'Task4Controller',
          controllerAs: 'vm',
          title: 'Task 4'
        }
      }
    ];
  }
})();
