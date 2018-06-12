var events = {
  templateUrl: './events-success.html'
  // controller: 'SearchResultsController'
};

angular
  .module('components.events')
  .component('events', events)
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        parent: 'app',
        url: '/events-success',
        component: 'events'
      });
  });
