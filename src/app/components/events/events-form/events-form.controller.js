function SearchBarController(SearchService, $state) {
  var ctrl = this;

  ctrl.submitKeyword = function () {
    console.log(ctrl.searchInput);
    return SearchService
      .saveKeyword(ctrl.searchInput)
      // console.log(SearchService.navParse(ctrl.searchInput));
    // }.then(function() {
    //   $state.go('searchResults')
    // });
  }
  ctrl.navResult = function() {
    console.log("success!");
    // setTimeout(function () {
    $state.go('searchResults');
      // }, 500);
  };
};

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
