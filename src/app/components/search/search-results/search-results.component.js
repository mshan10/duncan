var searchResults = {
  bindings: {
    presults: '<'
  },
  templateUrl: './search-results.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults)
  .config(function ($stateProvider) {
    $stateProvider
      .state('searchResults', {
        parent: 'search',
        url: '/search-results',
        component: 'searchResults',
        resolve: {
          presults: function(SearchService) {
            return SearchService.navParse();
          }
        }
      })
  });
