var eventsSuccess = {
  templateUrl: './events-success.html'
};

angular
  .module('components.events')
  .component('eventsSuccess', eventsSuccess)
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsSuccess', {
        parent: 'events',
        url: '/events-success',
        component: 'eventsSuccess'
      });
  });
