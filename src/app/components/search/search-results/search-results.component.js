var searchResults = {
  templateUrl: './search-results.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults)
  .config(function ($stateProvider) {
    $stateProvider
      .state('search.searchResults', {
        url: '/seach-results',
        component: 'searchResults'
      });
  });
