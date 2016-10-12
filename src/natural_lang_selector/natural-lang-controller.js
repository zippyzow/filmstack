peeweeModule.controller('naturalLangCtrl', function($scope) {

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
  };

  $scope.decades = [
    {
      label: "any decade",
      value: [1900, 2019]
    },
    {
      label: "the 1900's",
      value: [1900, 1909]
    },
    {
      label: "the 1910's",
      value: [1910, 1919]
    },
    {
      label: "the 1920's",
      value: [1920, 1929]
    },
    {
      label: "the 1930's",
      value: [1930, 1939]
    },
    {
      label: "the 1940's",
      value: [1940, 1949]
    },
    {
      label: "the 1950's",
      value: [1950, 1959]
    },
    {
      label: "the 1960's",
      value: [1960, 1969]
    },
    {
      label: "the 1970's",
      value: [1970, 1979]
    },
    {
      label: "the 1980's",
      value: [1980, 1989]
    },
    {
      label: "the 1990's",
      value: [1990, 1999]
    },
    {
      label: "the 2000's",
      value: [2000, 2009]
    },
    {
      label: "the 2010's",
      value: [2010, 2019]
    }
  ];

  $scope.selectedDecade = $scope.decades[0];

  $scope.runtimes = [
    {
      label: "any duration",
      value: [0, Number.MAX_VALUE]
    },
    {
      label: "up to 1 hour long",
      value: [0, 60]
    },
    {
      label: "up to 2 hours long",
      value: [0, 120]
    },
    {
      label: "up to 3 hours long",
      value: [0, 180]
    }
  ];

  $scope.selectedRuntime = $scope.runtimes[0];

});