// this is gonna be a custom directive. We don't need to put directive's array, since we dont want to create a new module. Note that we use the name of our application. That's another reason why the app.js file has to load first in the html file
//now we use the directive method to attach a new directive to the module
angular.module('whishList')
.directive('hello-world.js', )  //first parameter is the name of the directive; second is a callback function that returns an object.