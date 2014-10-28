var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.myarr = [1,2,3,4,5,5];

  $scope.users = [{name: "mike", age: 23}, {name: "andy", age: 34},
  {name: "reid", age: 45}]

  // ng-repeat will iterate through object as well
  $scope.ob = {name: "Mike", age: 35, title: "Mr."}
});