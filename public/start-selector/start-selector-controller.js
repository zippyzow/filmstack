/**
 * Created by haileykeen on 3/13/16.
 */
peeweeModule.controller('startSelectorCtrl', function($scope) {
  $scope.selectedIndex = 0;

  $scope.goBack = function() {
    $scope.selectedIndex--;
  };
  $scope.goNext = function() {
    $scope.selectedIndex++;
    if ($scope.selectedIndex === 3) {
      $scope.$emit('goToMovieResults');
    }
  };
});