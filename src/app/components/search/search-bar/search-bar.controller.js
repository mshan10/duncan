function SearchBarController() {
  // var ctrl = this;
  // ctrl.$onInit = function () {
  //   ctrl.error = null;
  //   ctrl.user = {
  //     email: '',
  //     password: ''
  //   };
  // };
  // ctrl.loginUser = function (event) {
  //   return AuthService
  //     .login(event.user)
  //     .then(function () {
  //       $state.go('app');
  //     }, function (reason) {
  //       ctrl.error = reason.message;
  //     });
  // };
// =======
// function SearchBarController(SearchService, $state) {
//   var ctrl = this;
//   ctrl.$onChanges = function (changes) {
//     if (changes.keyword) {
//       ctrl.keyword = angular.copy(ctrl.keyword);
//     }
//   };
//   ctrl.submit = function () {
//     $state.go('results');
//   };
// >>>>>>> 8fb7b7d061dd1ff0b4e8ce7ebac290d972b054c2
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
