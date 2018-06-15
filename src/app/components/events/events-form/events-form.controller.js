function EventsFormController(EventsService, $state) {
    var ctrl = this;
    // Function takes event input title, location, times, keyword, and description and saves it to PARSE
    ctrl.eventInput = function () {
      var title = ctrl.title;
      var location = ctrl.location;
      var eventStartTime = ctrl.eventStartTime;
      var eventEndTime = ctrl.eventEndTime;
      var keyword = ctrl.keyword;
      var description = ctrl.description;
      EventsService.submitEvent(title, location, eventStartTime, eventEndTime, keyword, description);
    };
    ctrl.navResult = function() {
      $state.go('eventsSuccess');
    };
};

angular
    .module('components.events')
    .controller('EventsFormController', EventsFormController);
