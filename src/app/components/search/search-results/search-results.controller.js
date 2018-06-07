function SearchResultsController(SearchService) {
  var ctrl = this;
  // ctrl.result = SearchService.searchResult
  // ctrl.submitKeyword = function (event) {
  //   this.keyword = event.keyword;
  //   console.log("success")
  // };

  // ctrl.result = SearchService.searchResult
  
  console.log(SearchService.searchResult);

}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);


  // var statefulComponent = {
  // 	template: `
  // 		<div>
  // 			<pre>{{ $ctrl.user | json }}</pre>
  // 			<stateless-component
  // 				user="$ctrl.user"
  // 				on-update="$ctrl.updateUser($event);">
  // 			</stateless-component>
  // 		</div>
  // 	`,
  // 	controller: function () {
  // 		this.user = {
  // 			name: 'Todd Motto',
  // 			location: 'England, UK'
  // 		};
  // 		this.updateUser = function (event) {
  // 			this.user = event.user;
  // 		};
  // 	}
  // };
