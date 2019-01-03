(function() {
  function HomeCtrl() {
  }
  var app = angular.module("sampleApp", ["firebase"])

  app.controller("SampleCtrl", function($scope, $firebaseObject) {
    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below
  });

  // JavaScript
  app.controller("MyCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
      var ref = firebase.database().ref();
      var list = $firebaseArray(ref);

      // add an item
      list.$add({ foo: "bar" }).then(...);

      // remove an item
      list.$remove(2).then(...);

      // make the list available in the DOM
      $scope.list = list;
    }
  ]);

  app.controller("MyCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
      var ref = firebase.database().ref();
      var messagesRef = ref.child("messages");
      var query = messagesRef.orderByChild("timestamp").limitToLast(10);

      var list = $firebaseArray(query);
    }
  ]);


  angular
    .module('Blocitoff')
    .controller('HomeCtrl', [HomeCtrl]);
})();
