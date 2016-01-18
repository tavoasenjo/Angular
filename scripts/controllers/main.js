
angular.module("wishList")
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

	$scope.deleteWish = function(wish, $index){
		dataService.deleteWish(wish);
		$scope.wishes.splice($index, 1);
	};

	$scope.saveWish = function(wish){
		dataService.saveWish(wish);
	}
});