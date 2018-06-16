function AppController($state) {
  $state.go('search.searchBar')
}

angular
  .module('common')
  .controller('AppController', AppController);
