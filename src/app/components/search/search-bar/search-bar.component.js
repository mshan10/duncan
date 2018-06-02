var searchBar = {
  bindings: {
    keyword: '<',
    button: '@',
    onSubmit: '&'
  },
  templateUrl: './search-bar.html',
  controller: 'SearchBarController'
};

angular
  .module('components.search')
  .component('searchBar', searchBar)
  // .config(function ($stateProvider) {
	// 	$stateProvider
	// 		.state('search', {
  //       parent: 'app',
	// 			url: '/search',
	// 			component: 'search'
  //
	// 			// template: '<search></search>'
	// 		});
	// 	// $urlRouterProvider.otherwise('/app');
	// });
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        redirectTo: 'search.searchBar',
        parent: 'app',
        url: '/search',
        template: '<div ui-view></div>'
      })
      .state('search.searchBar', {
        url: '/search-bar',
        component: 'searchBar'
      });
    $urlRouterProvider.otherwise('/search/search-bar');
  });
