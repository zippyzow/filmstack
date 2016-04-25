peeweeModule.controller('genreSelectorCtrl', function($scope) {

  $scope.genres = [
    {
      label: 'Action',
      selected: false
    },
    {
      label: 'Adventure',
      selected: false
    },
    {
      label: 'Animation',
      selected: false
    },
    {
      label: 'Comedy',
      selected: false
    },
    {
      label: 'Biography',
      selected: false
    },
    {
      label: 'Crime',
      selected: false
    },
    {
      label: 'Documentary',
      selected: false
    },
    {
      label: 'Drama',
      selected: false
    },
    {
      label: 'Family',
      selected: false
    },
    {
      label: 'Fantasy',
      selected: false
    },
    {
      label: 'Film-Noir',
      selected: false
    },
    {
      label: 'History',
      selected: false
    },
    {
      label: 'Horror',
      selected: false
    },
    {
      label: 'Music',
      selected: false
    },
    {
      label: 'Musical',
      selected: false
    },
    {
      label: 'Mystery',
      selected: false
    },
    {
      label: 'Romance',
      selected: false
    },
    {
      label: 'Sci-Fi',
      selected: false
    },
    {
      label: 'Short',
      selected: false
    },
    {
      label: 'Sport',
      selected: false
    },
    {
      label: 'Thriller',
      selected: false
    },
    {
      label: 'Western',
      selected: false
    },
    {
      label: 'War',
      selected: false
    }
  ];

  $scope.updateSelectedGenres = function() {
    $scope.selectedGenres = $scope.genres
        .filter(function(genre) {
          return genre.selected;
        })
        .map(function(genre) {
          return genre.label;
        });
  }
});

