peeweeModule.controller('appCtrl', function($scope, moviesFactory) {
  $scope.isLoading = false;

  $scope.$watch('selectedDecade', function(newVal, oldVal) {
    if (newVal) {
      $scope.updateMovies();
    }
  });
  $scope.$watch('selectedGenres', function(newVal, oldVal) {
    if (newVal) {
      $scope.updateMovies();
    }
  });
  $scope.$watch('selectedRuntime', function(newVal, oldVal) {
    if (newVal) {
      $scope.updateMovies();
    }
  });

  $scope.updateMovies = function() {
    $scope.isLoading = true;
    moviesFactory.getMovies($scope.selectedDecade, $scope.selectedGenres, $scope.selectedRuntime).then(function(movies) {
      $scope.isLoading = false;
      $scope.movies = movies;
    });
  }
});