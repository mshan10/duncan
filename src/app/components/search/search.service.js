function SearchService(Parse) {
  var auth = new Parse.User();
  var currentUser = null;

  this.search = function (keyword) {
      // PARSE QUERY to get data
      var Keyword = Parse.Object.extend("Keyword")
      var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse

      // Including pointers
      query.include("hours")
      query.include("floorImage")

      // keyword has to be equal to inputted keyword by the user
      query.equalTo("keyword", keyword);

      query.first().then(function(result){

          // Converting Parse objects to readable angular objects
          Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
          // Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
          // Parse.defineAttributes(result.floorImage, ['floorImage']);
          //
          // //Calls Moment - Time library
          // result.startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS'); // $scope - accessible on the view
          // result.endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS'); // $scope - accessible on the view
          return result;
          // searching.result = result; // Makes results accessible on the view
          // result.keyword = duncanService.searchInput;

      });

  }]);
  // this.searchInput = '';

    // return Parse.User
    //   .logIn(user.email, user.password, {
    //     success: function(auth) {
    //     },
    //     error: function(auth, error) {
    //     }
    //   })
    //   .then(storeAuthData);
};
