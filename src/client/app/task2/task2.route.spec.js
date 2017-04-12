// /* jshint -W117, -W030 */
// describe('task2 routes', function() {
//   describe('state', function() {
//     var view = 'app/task2/task2.html';
//
//     beforeEach(function() {
//       module('app.task2', bard.fakeToastr);
//       bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
//     });
//
//     beforeEach(function() {
//       $templateCache.put(view, '');
//     });
//
//     it('should map state task2 to url /task2 ', function() {
//       expect($state.href('task2', {})).to.equal('/task2');
//     });
//
//     it('should map /task2 route to task2 View template', function() {
//       expect($state.get('task2').templateUrl).to.equal(view);
//     });
//
//     it('of task2 should work with $state.go', function() {
//       $state.go('task2');
//       $rootScope.$apply();
//       expect($state.is('task2'));
//     });
//   });
// });
