function SearchResultsController(SearchService, $filter) {
    var ctrl = this;
    ctrl.result = SearchService.data;
    console.log(SearchService.data)

    ctrl.submitUser = function() {
      var userName = $filter('lowercase')(ctrl.userName);
      var userEmail = ctrl.userEmail;
      console.log(userName);
      SearchService.signUp(userName, userEmail);
      $state.go('events');
    };
}

angular
    .module('components.search')
    .controller('SearchResultsController', SearchResultsController);
