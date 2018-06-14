function EventsService(Parse, $filter) {
  var self = this;
  // PARSE QUERY to get data

  // // Including pointers
  self.submitEvent = function(title, location, eventStartTime, eventEndTime, keyword, description) {
    var eventData = new Parse.Object('Event'); // Targets Event class in Parse
    Parse.defineAttributes(eventData, ['title', 'location', 'eventStartTime', 'eventEndTime', 'keyword', 'description']);
    eventData.title = title;
    eventData.location = location;
    eventData.eventStartTime = eventStartTime;
    eventData.eventEndTime = eventEndTime;
    eventData.keyword = $filter('lowercase')(keyword); // Makes user inputted keyword lowercase before saving to Parse
    eventData.description = description;
    eventData.save(null, {

        success: function (eventData) {},

        error: function (eventData, error) {}

    });
  };
}

angular
  .module('components.events')
  .service('EventsService', EventsService);
