var app = angular.module('app', []);
// wrapping $scope and DataService in array before function is "dependancy injection"
// it's required for JS engine to recognize angular within minified code
app.controller('MainController', ['$scope', 'DataService', function(scope, dataservice) {
  scope.mydata = dataservice.data
}]);


// we're injecting dependencies in factory
app.factory('DataService', ['AppendService', function(AppendService) {
  return {
    data: AppendService.append("This is service data")
  }
}])

app.factory('AppendService', function() {
  return {
    append: function(val) {
      return val + " and this too!"
    }
  }
});
