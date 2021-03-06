'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'ngResource',
    'myApp.home',
    'myApp.about',
    'myApp.category',
    'myApp.version',
    'wu.masonry'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}])
.factory("Content", ['$resource', function($resource) {
    return $resource("http://farnsworth.zyring.com/categories/:category");
}])
.run(['$rootScope', function($rootScope){
    $rootScope.$on("$routeChangeSuccess", function(e, data) {
        $rootScope.controller = data.controller;
    });
}]);
