/**
 * Created by haileykeen on 3/13/16.
 */
peeweeModule.directive('pwStartSelector', function() {
  return {
    restrict: 'E',
    templateUrl: 'start-selector/start-selector.html',
    controller: 'startSelectorCtrl',
  };
});