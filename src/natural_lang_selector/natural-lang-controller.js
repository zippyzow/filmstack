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

  $scope.selectedDecade = [1900, 2019];

  $scope.decades = [
    {
      label: "1900's",
      value: [1900, 1909]
    },
    {
      label: "1910's",
      value: [1910, 1919]
    },
    {
      label: "1920's",
      value: [1920, 1929]
    },
    {
      label: "1930's",
      value: [1930, 1939]
    },
    {
      label: "1940's",
      value: [1940, 1949]
    },
    {
      label: "1950's",
      value: [1950, 1959]
    },
    {
      label: "1960's",
      value: [1960, 1969]
    },
    {
      label: "1970's",
      value: [1970, 1979]
    },
    {
      label: "1980's",
      value: [1980, 1989]
    },
    {
      label: "1990's",
      value: [1990, 1999]
    },
    {
      label: "2000's",
      value: [2000, 2009]
    },
    {
      label: "2010's",
      value: [2010, 2019]
    },
    {
      label: "All",
      value: [1900, 2019]
    }
  ];

  $scope.runtimes = [
    {
      label: "Up to 1 hour long",
      value: [0, 60]
    },
    {
      label: "Up to 2 hours long",
      value: [0, 120]
    },
    {
      label: "Up to 3 hours long",
      value: [0, 180]
    },
    {
      label: "No Limit",
      value: [0, Number.MAX_VALUE]
    }
  ]

});