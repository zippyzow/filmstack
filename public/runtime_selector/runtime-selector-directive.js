peeweeModule.directive('pwRuntimeSelector', function() {
  return {
    restrict: 'E',
    templateUrl: '/runtime_selector/runtime-selector.html',
    controller: 'runtimeSelectorCtrl',
  }
});