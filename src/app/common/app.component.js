var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        // redirectTo: 'search',
        url: '/app',
        // data: {
        //   requiredAuth: true
        // },
        component: 'app'
      })
  });
