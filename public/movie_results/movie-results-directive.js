peeweeModule.directive('pwMovieResults', function() {
  return {
    restrict: 'E',
    templateUrl: '/movie_results/movie-results.html',
    controller: 'movieResultsCtrl',
  }
});