function SearchBarController(SearchService, $state) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.keyword) {
      ctrl.keyword = angular.copy(ctrl.keyword);
    }
  };
  ctrl.submit = function () {
    $state.go('results');
  };
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
