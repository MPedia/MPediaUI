// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'ion-autocomplete', 'ion-google-place', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  // Each tab has its own nav history stack:

  .state('state1', {
    url: '/state1',
    templateUrl: 'templates/state1.html',
    controller: 'State1Ctrl'
  })

  .state('state2', {
    url: '/state2',
    templateUrl: 'templates/state2.html'
  })

  .state('SignspVerify', {
    url: '/SignUpVerify',
    templateUrl: 'templates/SignUpVerify.html',
    controller: 'SgnUpVerifyCtrl'
  })

  .state('tab2', {
    url: '/tab2',
//    abstract: true,
    templateUrl: 'templates/tab2.html'
  })

  // Each tab has its own nav history stack:
  .state('tab2.pref', {
    url: '/pref',
    views: {
      'tab2-pref': {
        templateUrl: 'templates/tab2-pref.html',
        controller: 'PrefCtrl'
      }
    }
  })

  .state('tab2.prof', {
    url: '/prof',
    views: {
      'tab2-prof': {
        templateUrl: 'templates/tab2-prof.html',
        controller: 'ProfCtrl'
      }
    }
  })  



  .state('tabs', {
    url: '/tabs',
//    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tabs.vdeo', {
    url: '/vdeo',
    views: {
      'tabs-vdeo': {
        templateUrl: 'templates/tabs-vdeo.html',
        controller: 'VdeoCtrl'
      }
    }
  })

  .state('tabs.adio', {
    url: '/adio',
    views: {
      'tabs-adio': {
        templateUrl: 'templates/tabs-adio.html',
        controller: 'AdioCtrl'
      }
    }
  })

  .state('tabs.wpage', {
    url: '/wpage',
    views: {
      'tabs-wpage': {
        templateUrl: 'templates/tabs-wpage.html',
        controller: 'WpageCtrl'
      }
    }
  })

  .state('locationMenu', {
    url: '/locationMenu',
    templateUrl: 'templates/locationMenu.html',
    controller: 'LocnMnuCtrl'
  })

  .state('locationMap', {
    url: '/locationMap',
    templateUrl: 'templates/locationMap.html',
    controller: 'LocnMapCtrl'
  });

    // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/');

});

