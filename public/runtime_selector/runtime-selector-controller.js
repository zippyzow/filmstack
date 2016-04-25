peeweeModule.controller('runtimeSelectorCtrl', function($scope) {
  //$scope.selectedRuntime = [0, 180];

  $scope.runtimes = [
    {
      label: "Up to 1 hour",
      value: [0, 60]
    },
    {
      label: "Up to 2 hours",
      value: [0, 120]
    },
    {
      label: "Up to 3 hours",
      value: [0, 180]
    },
    {
      label: "No Limit",
      value: [0, Number.MAX_VALUE]
    }
  ]
});