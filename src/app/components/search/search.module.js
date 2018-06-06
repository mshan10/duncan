angular
  .module('components.search', [
    'ui.router',
    'ngParse'
  ])
  .config(['ParseProvider', function ($ParseProvider) {

    var MY_PARSE_APP_ID = 'dMTmXzxnwbeMe9iyK4vivUqoCdQSq5XJGf3LGHOq';
    var MY_PARSE_JS_KEY = 'kAMpM6libZXYPBNa6gl20X09BiqjURQhUrsKoSlX';
    $ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
    $ParseProvider.serverURL = 'https://parseapi.back4app.com/';
  }]);
