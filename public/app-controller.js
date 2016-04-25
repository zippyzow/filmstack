peeweeModule.controller('appCtrl', function($scope, $document, $timeout, moviesFactory) {
  $scope.isLoading = false;
  $scope.isMovieResults = false;

  $scope.$on('goToMovieResults', function() {
    angular.element($document[0].body).css('background', 'white');
    $scope.isMovieResults = true;
    $scope.updateMovies();
  });

  $scope.$watch('selectedDecade', function(newVal, oldVal) {
    if (newVal) {
      $scope.updateMovies();
    }
  });
  $scope.$watch('selectedGenres', function(newVal, oldVal) {
    if (newVal) {
      $timeout(function() {
        $scope.updateMovies();
      }, 200);
    }
  });
  $scope.$watch('selectedRuntime', function(newVal, oldVal) {
    if (newVal) {
      $scope.updateMovies();
    }
  });

  $scope.updateMovies = function() {

    if ($scope.isMovieResults) {
      $scope.movies = [];
      $scope.isLoading = true;
      moviesFactory.getMovies($scope.selectedDecade, $scope.selectedGenres, $scope.selectedRuntime).then(function (movies) {
        $scope.isLoading = false;
        $scope.movies = movies;
      });
    }
  }
});