var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.mydata = {val: "jake"}

  $scope.$watch('mydata.val', function(newval) {

    // checks if char length is too long in the input area
    $scope.mydata.toolong = newval.length > 15
  })
});