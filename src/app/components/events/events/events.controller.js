function EventsController(EventsService, $filter, $state) {
    var ctrl = this;
    ctrl.result = SearchService.data;
    console.log(SearchService.data)

    // ctrl.submitUser = function() {
    //   var userName = $filter('lowercase')(ctrl.userName);
    //   var userEmail = ctrl.userEmail;
    //   console.log(userName);
    //   SearchService.signUp(userName, userEmail);
    //   $state.go('userSignup');
    // };
}

angular
    .module('components.events')
    .controller('EventsController', EventsController);
