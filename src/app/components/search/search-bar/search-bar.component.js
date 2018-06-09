var searchBar = {
  bindings: {
    searchInput: '<',
    onSubmit: '&'
  },
  templateUrl: './search-bar.html',
  controller: 'SearchBarController'
};

angular
  .module('components.search')
  .component('searchBar', searchBar)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        // redirectTo: 'search.searchBar',
        parent: 'app',
        url: '/search',
        template: '<div ui-view></div>'
      })
      .state('search.searchBar', {
        url: '/search-bar',
        component: 'searchBar',
        resolve: {
          
        }
      });
    $urlRouterProvider.otherwise('/search/search-bar');
  });
