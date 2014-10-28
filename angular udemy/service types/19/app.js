var app = angular.module('app', []);

app.controller('MainController', function($scope, constService, valService) {
  console.log(constService, valService())
});

app.constant('constService', {attr: "this is const data!"})

app.value('valService', function() {
  return "this is returned from a fn"
})