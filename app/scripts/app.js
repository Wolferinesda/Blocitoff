(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4VWKIHkiFsOcdLoFrlgv4MBAvkJfCDrM",
    authDomain: "bloc-chat-room-25c2c.firebaseapp.com",
    databaseURL: "https://bloc-chat-room-25c2c.firebaseio.com",
    projectId: "bloc-chat-room-25c2c",
    storageBucket: "bloc-chat-room-25c2c.appspot.com",
    messagingSenderId: "648503535304"
  };
  firebase.initializeApp(config);

  angular
    .module('Blocitoff', ['ui.router', 'firebase'])
    .config(config);
    angular.bootstrap(document, ['Blocitoff']);
})();
