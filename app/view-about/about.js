'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'view-about/about.html',
        controller: 'aboutCtrl'
    });
}])

.controller('aboutCtrl', ['$scope', function($scope) {

}]);
