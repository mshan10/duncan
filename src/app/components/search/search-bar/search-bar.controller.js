function SearchBarController(SearchService, $state) {
  var ctrl = this;
  // ctrl.$onChanges = function (changes) {
  //   if (changes.keyword) {
  //     ctrl.keyword = angular.copy(ctrl.keyword);
  //   }
  //   console.log(this.keyword);
  // };
  ctrl.submitKeyword = function () {
    // console.log(ctrl.keyword);
    return SearchService
      .navParse(ctrl.searchInput)
    };
};

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
