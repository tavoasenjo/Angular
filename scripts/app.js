// the first parameter is the name of the application! Te second parameter is an empty array, and defines the dependencies of the app. If you dont have dependencies, just leave an empty array
angular.module("whishList", [])
.controller('mainCtrl', function($scope){
	$scope.helloWorld = function(){
		console.log("Hello World");
	};

	$scope.wishes = [
		{"name": "Go Pro"},
		{"name": "Macbook Pro"},
		{"name": "Shave Machine"},
		{"name": "Play Station 4"},
		{"name": "Ticket to Bahamas"},
		{"name": "Apple Watch 2"},
		{"name": "Dev Course Subscription"}
	]

});