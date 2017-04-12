(function() {
  'use strict';

  angular
    .module('app.task3')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'task3',
        config: {
          url: '/task3',
          templateUrl: 'app/task3/task3.html',
          controller: 'Task3Controller',
          controllerAs: 'vm',
          title: 'Task 3',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Task3'
          }
        }
      }
    ];
  }
})();
