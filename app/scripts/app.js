'use strict';

angular.module('tusApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl'
      })
      .when('/create_story', {
        templateUrl: 'views/create_story.html',
        controller: 'CreateStoryCtrl'
      })
      .when('/create_user', {
        templateUrl: 'views/create_user.html',
        controller: 'CreateUserCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
