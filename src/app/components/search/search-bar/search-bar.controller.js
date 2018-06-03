function SearchBarController($state) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.keyword) {
      this.keyword = angular.copy(this.keyword);
    }
  };
  ctrl.submitKeyword = function () {
    this.onSubmit({
      $event: {
        keyword: this.keyword
      }
    })
  };
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
