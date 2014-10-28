var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, myService) {
  console.log(myFactory.getData());
  myFactory.addData('bla bla bla');
  console.log(myFactory.getData());
  console.log(myService.getData());
  myService.addData('bla bla bla');
  console.log(myService.getData())
});


// examples of how custom factories could be created and used
app.factory('myFactory', function() {
  var myString = "this is some other data";
  var addToString = function(newstr) {
    myString += newstr
  }
  return {
    getData: function() {
      return "String contains: " + myString
    },
    addData: addToString
  }
});

app.service('myService', function() {
  var myString = "this is some other data";
  var addToString = function(newstr) {
    myString += newstr
  }
  
    this.getData = function() {
      return "String contains: " + myString
    }

    this.addData = addToString
  
})