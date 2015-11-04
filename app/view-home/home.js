'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view-home/home.html',
        controller: 'homeCtrl'
    });
}])

.controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.categories = [
        {
            title: 'Design',
            image_url: 'images/design.jpg',
            color: ''
        },
        {
            title: 'Gaming',
            image_url: 'images/gaming.png',
            color: ''
        },
        {
            title: 'Cars',
            image_url: 'images/cars.jpg',
            color: ''
        },
        {
            title: 'Finance',
            image_url: 'images/finance.jpeg',
            color: ''
        },
        {
            title: 'Sports',
            image_url: 'images/sports.jpg',
            color: ''
        },
        {
            title: 'Travel',
            image_url: 'images/travel.jpg',
            color: ''
        },
        {
            title: 'Science',
            image_url: 'images/science.jpg',
            color: ''
        },
        {
            title: 'Cinema',
            image_url: 'images/cinema.jpg',
            color: ''
        },
        {
            title: 'Tech',
            image_url: 'images/technology.jpg',
            color: ''
        },
        {
            title: 'Business',
            image_url: 'images/business.jpg',
            color: ''
        }
    ];
}]);
