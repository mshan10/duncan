function SearchService(Parse) {

  // PARSE QUERY to get data
  var Keyword = Parse.Object.extend("Keyword")
  var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse
  var ctrl = this;

  ctrl.searchResult = {};

  // Including pointers
  query.include("hours")
  query.include("floorImage")

  //Function grabs data for searched keyword
  ctrl.navParse = function(searchInput) {
    query.equalTo("keyword", searchInput)
    query.first().then(function(result) {

      // Converting Parse objects to readable angular objects
      Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
      Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
      Parse.defineAttributes(result.floorImage, ['floorImage']);

      // // Calls Moment - Time library
      // ctrl.startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS');
      // ctrl.endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS');

      //searchResult made accessible to the view
      ctrl.searchResult = result;
      console.log(ctrl.searchResult);
      return ctrl.searchResult
    })
  }
};

angular
  .module('components.search')
  .service('SearchService', SearchService);
