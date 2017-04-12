/* jshint -W117, -W030 */
describe('task4 routes', function() {
  describe('state', function() {
    var view = 'app/task4/task4.html';

    beforeEach(function() {
      module('app.task4', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state task4 to url /task4 ', function() {
      expect($state.href('task4', {})).to.equal('/task4');
    });

    it('should map /task4 route to task4 View template', function() {
      expect($state.get('task4').templateUrl).to.equal(view);
    });

    it('of task4 should work with $state.go', function() {
      $state.go('task4');
      $rootScope.$apply();
      expect($state.is('task4'));
    });
  });
});
