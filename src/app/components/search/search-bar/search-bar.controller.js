function SearchBarController($state) {
  var ctrl = this;
  // ctrl.$onChanges = function (changes) {
  //   if (changes.keyword) {
  //     ctrl.keyword = angular.copy(ctrl.keyword);
  //   }
  //   console.log(this.keyword);
  // };
  ctrl.submitKeyword = function () {
    console.log(ctrl.keyword);
    this.onSubmit({
      $event: {
        keyword: ctrl.keyword
      }
    })
  };
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
