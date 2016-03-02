angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $stateParams) {
    $scope.SignUp = function($scope) {};
})

.controller('State1Ctrl', function($scope, $rootScope) {
  ionic.Platform.ready(function(){});
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  $rootScope.currentPlatform = ionic.Platform.platform();
  $rootScope.isOS = ionic.Platform.isIOS();
  $rootScope.isNDRD = ionic.Platform.isAndroid();
})

.controller('JsonCtrl', function($scope, $http) {
  $http.get("/img/videos.json").then(function (response) {
      $scope.myData = response.data.records;
  })
})

.controller('State2Ctrl', function($scope) {})

.controller('SgnUpVerifyCtrl', function($scope) {})

.controller('PrefCtrl', function($scope) {})

.controller('ProfCtrl', function($scope) {})

.controller('VdeoCtrl', function($scope) {})

.controller('AdioCtrl', function($scope) {})

.controller('WpageCtrl', function($scope) {})

.controller('LocnMnuCtrl', function($scope) {})

.controller('LocnMapCtrl', function($scope, $state, $cordovaGeolocation) {
 
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
})


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});





/*
.controller('PlatformCtrl', function($scope, $rootScope) {

  ionic.Platform.ready(function(){
    // will execute when device is ready, or immediately if the device is already ready.
  });

  var deviceInformation = ionic.Platform.device();

  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();
  $rootScope.currentPlatform = ionic.Platform.platform();
  var currentPlatformVersion = ionic.Platform.version();
  
  ionic.Platform.exitApp(); // stops the app
    
})
*/