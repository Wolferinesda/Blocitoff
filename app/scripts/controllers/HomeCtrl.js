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

  angular
      .module('Blocitoff')
      .controller('HomeCtrl', ['$scope', '$firebasearray', HomeCtrl]);
})();
