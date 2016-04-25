peeweeModule.controller('yearSelectorCtrl', function($scope) {
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
  ]
});