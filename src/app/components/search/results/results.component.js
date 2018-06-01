var receipt = {
  templateUrl: './results.html',
  controller: 'ResultsController'
};

angular
    .module('components.search')
    .component('results', results)
    .config(function ($stateProvider) {
      $stateProvider.state('results', {
        parent: 'app',
        url: '/results',
        component: 'results',
      });
    });
