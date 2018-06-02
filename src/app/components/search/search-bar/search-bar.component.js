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
  .config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('search', {
        parent: 'app',
				url: 'search',
				component: 'search'

				// template: '<search></search>'
			});
		$urlRouterProvider.otherwise('search');
	});
