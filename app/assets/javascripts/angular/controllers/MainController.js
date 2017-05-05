var app = angular.module('app');

app.controller('MainController', ['$scope', function($scope) {
  $scope.test = "Welcome";
  $scope.lines = "A simple user interface built with Angular 1.6 and Ruby on Rails"
}]);
