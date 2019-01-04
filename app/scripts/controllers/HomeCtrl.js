(function() {
  function HomeCtrl ($scope, $firebasearray) {
  }

  angular
      .module('Blocitoff', ["firebase"])
      .controller('HomeCtrl', ['$scope', '$firebasearray', HomeCtrl]);
})();
