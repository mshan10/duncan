function SearchBarController(SearchService, $state) {
  var ctrl = this;

  ctrl.submitKeyword = function () {
    console.log(ctrl.keyword);
    return SearchService
      .navParse(ctrl.searchInput)
      .then(function() {
        $state.go('searchResults')
      })
      // console.log(SearchService.navParse(ctrl.searchInput));
    };
};

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
