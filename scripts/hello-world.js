// this is gonna be a custom directive. We don't need to put directive's array, since we dont want to create a new module. Note that we use the name of our application. That's another reason why the app.js file has to load first in the html file
//now we use the directive method to attach a new directive to the module
angular.module('whishList')
.directive('helloWorld', function(){
	return {
		template: "this is the hello world directive",
		restrict: "E"
	};
});  //first parameter is the name of the directive; second is a callback function that returns an object. we will make a simple directive by providing the template key

// We can also use restrict into our directive object, to restrict how the directive will be used. For instance, we can restrict it to be just an element, or an atribute of an element. "E" means just element