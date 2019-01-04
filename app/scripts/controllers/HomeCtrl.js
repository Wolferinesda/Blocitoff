(function() {
  function HomeCtrl ($scope, $firebaseArray) {
    console.log($scope);
    console.log($firebaseArray);
    $scope.name = "BLOC"

    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);
    list.$add({ foo: "bar" });

    console.log(list);

    $scope.list = list;

  }

  var app = angular.module("sampleApp", ["firebase"]);

  app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

app.controller("MyCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);

    // add an item
    list.$add({ foo: "bar" }).then(...)

    // remove an item
    list.$remove(2).then(...);

    // make the list available in the DOM
    $scope.list = list;
  }
]);

  angular
      .module('Blocitoff')
      .controller('HomeCtrl', ['$scope', '$firebasearray', HomeCtrl]);
})();
