function SearchService(Parse) {
  var self = this;
  // PARSE QUERY to get data

  // // Including pointers
  var Keyword = Parse.Object.extend('Keyword')
  var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse

   // Including pointers
  //Function grabs data for searched keyword
  self.navParse = function(searchInput) {

    query.equalTo("keyword", searchInput);
    query.find().then(
      function(results) {
      console.log(results);
      self.data = results;
    });
  }

  // self.navParse = function(searchInput) {
  //   query.equalTo("keyword", searchInput)
  //   query.first().then(function(result) {
  //
  //     // Converting Parse objects to readable angular objects
  //     Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
  //     Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
  //     Parse.defineAttributes(result.floorImage, ['floorImage']);
  //
  //     // Calls Moment - Time library
  //     // ctrl.startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS');
  //     // ctrl.endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS');
  //
  //     //searchResult made accessible to the view
  //     self.searchResult = result;
  //     console.log(self.searchResult);
  //     return self.searchResult
  //   })
  // }
};

angular
  .module('components.search')
  .service('SearchService', SearchService);
