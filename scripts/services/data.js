angular.module("wishList")
.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('this is the hello console service!');
	};

	this.getWishes = function(callback){
		$http.get('Mock/wishes.json')
			.then(callback)	
	};

	this.deleteWish = function(wish){
		console.log("The " + wish.name + " wish has been deleted");
		// other logix
	}; 

	this.saveWish = function(wish){
		console.log("The "+ wish.name + " was saved!");
	};
});