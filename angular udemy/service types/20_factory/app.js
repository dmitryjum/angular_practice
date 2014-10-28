var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory) {
  console.log(myFactory);
});


// examples of how custom factories could be created and used
app.factory('myFactory', function() {
  return "a string"
});

app.factory('Auth', function() {
  // closure allows to create private properties
  var current_user = {};
  return {
    setUser: function() {},
    login: function() {},
    logout: function() {}
  }
}

// the example above is not functional