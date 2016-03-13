peeweeModule.directive('pwYearSelector', function() {
  return {
    restrict: 'E',
    templateUrl: '/year_selector/year-selector.html',
    controller: 'yearSelectorCtrl',
    scope: {
      selectedDecade: '='
    }
  }
});