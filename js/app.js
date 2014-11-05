'use strict';

angular.module('app', [
    'ngRoute',
    'ngAnimate'
]).
config(function ($routeProvider) {
    $routeProvider.
    when('/news', {
        title: 'news',
        templateUrl: 'views/news.html'
    }).
    when('/music', {
        title: 'music',
        templateUrl: 'views/music.html'
    }).
    when('/photos', {
        title: 'photos',
        templateUrl: 'views/photos.html'
    }).
    when('/videos', {
        title: 'videos',
        templateUrl: 'views/videos.html'
    }).
    when('/schedule', {
        title: 'schedule',
        templateUrl: 'views/schedule.html'
    }).
    when('/', {
        title: 'bio',
        templateUrl: 'views/bio.html'
    });
})
.controller('AppCtrl',['$scope', function($scope){
    $scope.toggleHeaderMenu = function() {
        $scope.toggleHeaderMenu = false;
    };

    $scope.activeNav = function(path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active"
        } else {
            return ""
        }
    };

    $('.header__menu a').on('click', function() {
        $scope.toggleHeaderMenu = true;
    });
}])
.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        window.scrollTo(0,0);
        $rootScope.title = current.title;
    });
}]);


function navCtrl($scope, $location, $route) {
  $scope.activePath = null;
  $scope.$on('$routeChangeSuccess', function(){
    $scope.activePath = $location.path();
  });
}