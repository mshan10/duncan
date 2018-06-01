function SearchBarController(SearchService, $state) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.keyword) {
      ctrl.keyword = angular.copy(ctrl.keyword);
    }
  };
  ctrl.submitForm = function () {
    ctrl.onSubmit({
      $event: {
        keyword: ctrl.keyword
      }
    });
  };
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
