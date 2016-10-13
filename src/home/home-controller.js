peeweeModule.controller('appCtrl', function($scope, $document, $timeout, $mdDialog, moviesFactory) {
  $scope.isLoading = false;
  $scope.isMovieResults = false;

  $scope.showGenres = function($event) {
    // $mdDialog.show(
    //     $mdDialog.alert()
    //         .clickOutsideToClose(true)
    //         .title('Opening from offscreen')
    //         .textContent('Closing to offscreen')
    //         .ariaLabel('Offscreen Demo')
    //         .ok('Amazing!')
    //         .openFrom('.genre-button')
    //         .closeTo('.genre-button')
    // );
    $mdDialog.show({
      targetEvent: $event,
      clickOutsideToClose: true,
      templateUrl: '/genre_selector/genre-selector-dialog.html',
      controller: 'genreSelectorDialogCtrl',
      fullscreen: true
    });
  };

  $scope.closeDialog = function() {
    alert('hi');
  };

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
    console.log('updateMovies');
      $scope.movies = [];
      $scope.isLoading = true;
      moviesFactory.getMovies($scope.selectedDecade.value, $scope.selectedGenres, $scope.selectedRuntime.value).then(function(movies) {
        $scope.isLoading = false;
        $scope.movies = movies;
      });
  }
});

