var eventsForm = {
    templateUrl: './events-form.html',
    controller: 'EventsFormController'
};

angular
    .module('components.events')
    .component('eventsForm', eventsForm)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('events', {
                parent: 'app',
                url: '/events',
                template: '<div ui-view></div>'
            })
            .state('events.eventsForm', {
                url: '/events-form',
                component: 'eventsForm'
            });
        $urlRouterProvider.otherwise('/events/events-form');
    });
