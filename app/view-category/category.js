'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/:category', {
        templateUrl: 'view-category/category.html',
        controller: 'categoryCtrl'
    });
}])

.controller('categoryCtrl', ['$scope', '$routeParams', 'Content', '$rootScope',
  function ($scope, $routeParams, Content, $rootScope) {
      $scope.pageTitle = $routeParams.category;
      $scope.content = Content.get({category: $routeParams.category.toLowerCase()});
  }]);
