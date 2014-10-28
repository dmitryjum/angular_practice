var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.photo = {
    url: "http://upload.wikimedia.org/wikipedia/en/7/75/DowntownSF.jpg",
    date: "january 1, 2014"
  }
});

// jQuerish way...
// app.directive('photo', function() {
//   return {
//     // E means directive will take form of actual tag like <photo>
//     restrict: 'E',
//     // what we're replacing that directive with (we're putting the whole template
//     // inside of one directive)
//     template: '<figure><img width="500px"/><figurecaption/></figure>',
//     replace: true,
//     link: function(scope, element, attrs) {
//       // observe is watching values of passed arguments
//       attrs.$observe('caption', function(value) {
//         element.find('figcaption').text(value)
//       })
//       attrs.$observe('photoSrc', function(value) {
//         element.find('img').attr('src', value)
//       })
//     }
//   }
// })

// angular way to write custom directives
app.directive('photo', function() {
  return {
    restrict: 'E',
    template: '<figure>' +
                '<img width="500px" ng-src="{{photoSrc}}"/>' +
                '<figcaption>{{caption}}</figcaption>' +
              '</figure>',
    replace: true,
    scope: {
      // takes $scope.caption from index.html file and $scope.photoSrc
      caption: '@',
      photoSrc: '@'
    }
  }
})