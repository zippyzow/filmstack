peeweeModule.directive('pwApp', function() {
  return {
    restrict: 'E',
    templateUrl: 'app.html',
    controller: 'appCtrl'
  };
});