peeweeModule.directive('pwMovieCard', function() {
  return {
    restrict: 'E',
    templateUrl: '/movie_results/movie_card/movie-card.html',
    controller: 'movieCardCtrl',
    scope: {
      movie: '='
    }
  }
});