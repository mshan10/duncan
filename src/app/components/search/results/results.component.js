var results = {
  templateUrl: './results.html',
  controller: 'ResultsController'
};

angular
  .module('components.search')
  .component('results', results)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('results', {
        parent: 'search',
        url: '/results',
        component: 'results'
      });
  // $urlRouterProvider.otherwise('search');
  });
