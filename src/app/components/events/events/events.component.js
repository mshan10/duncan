var events = {
  bindings: {
    presults: '<'
  },
  templateUrl: './events.html',
  controller: 'EventsController'
};

angular
  .module('components.events')
  .component('events', events)
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        parent: 'events',
        url: '/events',
        component: 'events',
        resolve: {
          presults: function(EventsService) {
            return EventsService.navParse();
          }
        }
      })
  });
