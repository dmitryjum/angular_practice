var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter) {
  $scope.mydata = {arr: [
    {name: "joe", age: 23},
    {name: "jane", age: 34},
    {name: "john", age: 12},
    {name: "jake", age: 56}
    ]};
});
// creating custom filter. It adds ... if we typed more than 10 chars
app.filter('charlimit', function() {
  return function(input, length) {
    if (!length) {
      length = 10
    }
    if (!input) {
      return ''
    }
    if (input.length <= length) {
      return input
    } else {
      return input.substring(0, length) + '...'
    }
  }
});

app.filter('candrink', function() {
  return function(data, minage) {
    var value, filtered = [];
    // minage begins undefined
    if (!minage) {
      minage = 21
    };
    for (var i = 0, dl = data.length; i < dl; i++) {
      value = data[i];
      if (value.age >= minage) {
        // pushes people that are younger 21 only in the array
        filtered.push(value);
      }
    }
    return filtered
  }
})