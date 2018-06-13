var userSignup = {
  templateUrl: './userSignup.html'
  // controller: 'SearchResultsController'
};

angular
  .module('components.userSignup')
  .component('userSignup', userSignup)
  .config(function ($stateProvider) {
    $stateProvider
      .state('userSignup', {
        parent: 'app',
        url: '/userSignup',
        component: 'userSignup'
      });
  });
