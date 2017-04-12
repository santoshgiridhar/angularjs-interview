/* jshint -W117, -W030 */
describe('task1 routes', function() {
  describe('state', function() {
    var view = 'app/task1/task1.html';

    beforeEach(function() {
      module('app.task1', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state task1 to url /task1 ', function() {
      expect($state.href('task1', {})).to.equal('/task1');
    });

    it('should map /task1 route to task1 View template', function() {
      expect($state.get('task1').templateUrl).to.equal(view);
    });

    it('of task1 should work with $state.go', function() {
      $state.go('task1');
      $rootScope.$apply();
      expect($state.is('task1'));
    });
  });
});
