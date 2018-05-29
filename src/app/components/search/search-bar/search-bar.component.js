var searchBar = {
  // bindings: {
  //   user: '<',
  //   button: '@',
  //   message: '@',
  //   onSubmit: '&'
  // },
  templateUrl: './search-bar.html',
  controller: 'SearchBarController'
};

angular
  .module('components.search')
  .component('searchBar', searchBar)
  .config(function ($stateProvider) {
		$stateProvider
			.state('search', {
				url: '/app',
				component: 'search'

				// template: '<search></search>'
			});
		// $urlRouterProvider.otherwise('/app');
	});
