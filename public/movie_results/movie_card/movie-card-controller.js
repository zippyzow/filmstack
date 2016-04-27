peeweeModule.controller('movieCardCtrl', function($scope) {

  $scope.getProxyUrl = function(originalUrl) {
    return '/imageproxy/' + encodeURIComponent(originalUrl);
  }
}); 