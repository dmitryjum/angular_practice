var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory) {
  console.log(myFactory.getData());
  myFactory.reverse();
  console.log(myFactory.getData());

});


// examples of how custom factories could be created and used
app.factory('myFactory', function() {
  var myString = "this is some other data";
  var addToString = function(newstr) {
    myString += newstr
  }
  return {
    getData: function() { return "String contains: " + myString },
    setData: function(data) { myString = data },
    addData: addToString
  }
});

app.config(function($provide) {
  $provide.decorator('myFactory', function($delegate) {
    $delegate.reverse = function() {
      // inverts characters, not just the word
      $delegate.setData($delegate.getData().split('').reverse().join(''))
    }
    return $delegate
  })
})