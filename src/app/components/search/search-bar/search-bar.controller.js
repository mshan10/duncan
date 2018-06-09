function SearchBarController(SearchService, $state) {
  var ctrl = this;

  ctrl.submitKeyword = function () {
    console.log(ctrl.searchInput);
    return SearchService
      .navParse(ctrl.searchInput)
      // console.log(SearchService.navParse(ctrl.searchInput));
    // }.then(function() {
    //   $state.go('searchResults')
    // });
  }
  ctrl.navResult = function() {
    console.log("success!");
    $state.go('searchResults');
  };
};

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
