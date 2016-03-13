peeweeModule.directive('pwGenreSelector', function() {
  return {
    restrict: 'E',
    templateUrl: '/genre_selector/genre-selector.html',
    controller: 'genreSelectorCtrl',
    scope: {
      selectedGenres: '='
    }
  }
});