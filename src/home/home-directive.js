peeweeModule.directive('pwApp', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/home.html',
    controller: 'appCtrl'
  };
});