/* jshint -W117, -W030 */
describe('task3 routes', function() {
  describe('state', function() {
    var view = 'app/task3/task3.html';

    beforeEach(function() {
      module('app.task3', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state task3 to url /task3 ', function() {
      expect($state.href('task3', {})).to.equal('/task3');
    });

    it('should map /task3 route to task3 View template', function() {
      expect($state.get('task3').templateUrl).to.equal(view);
    });

    it('of task3 should work with $state.go', function() {
      $state.go('task3');
      $rootScope.$apply();
      expect($state.is('task3'));
    });
  });
});
