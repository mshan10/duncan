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
  self.navParse = function() {
    query.equalTo("keyword", key)
    return query.first().then(function(result) {

      // Converting Parse objects to readable angular objects
      Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
      Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
      Parse.defineAttributes(result.floorImage, ['floorImage']);
      self.data = result;

      // Calls Moment - Time library
      self.data.startTime = moment(result.hours.startTime).add(5, 'hours').format('LT');
      self.data.endTime = moment(result.hours.endTime).add(5, 'hours').format('LT');

      //searchResult made accessible to the view
      console.log(self.data);
    })
  }

}

angular
  .module('components.events')
  .service('EventsService', EventsService);
