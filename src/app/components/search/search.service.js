function SearchService(Parse) {
  var self = this;
  // PARSE QUERY to get data

  // // Including pointers
  var Keyword = Parse.Object.extend('Keyword')
  var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse
  query.include("hours")
  query.include("floorImage")

   // Including pointers
  //Function grabs data for searched keyword
  var key;
  self.saveKeyword = function(searchInput) {
    console.log(searchInput);
    key = searchInput;
  }

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

};

angular
  .module('components.search')
  .service('SearchService', SearchService);
