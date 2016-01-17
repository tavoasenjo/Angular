// the first parameter is the name of the application! Te second parameter is an empty array, and defines the dependencies of the app. If you dont have dependencies, just leave an empty array
angular.module("whishList", [])
.controller('mainCtrl', function($scope, dataService){
	$scope.addWishes = function(){
		var wish = {name: "This is a new wish."};
		$scope.wishes.push(wish); 
	};

	$scope.helloConsole = dataService.helloConsole;

	$scope.learningNgChange = function(){
		console.log("An input has changed");
	};

	dataService.getWishes(function(response){
		console.log(response.data);
		$scope.wishes = response.data;
	});
})

.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('this is the hello console service!');
	};

	this.getWishes = function(callback){
		$http.get('Mock/wishes.json')
			.then(callback)	
	} 
});