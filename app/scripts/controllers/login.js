'use strict';

var tusApp = angular.module('tusApp');


tusApp.controller('LoginCtrl', function ($scope, Api) {

	$scope.login = function(user) {
		console.log(user);
		Api.login(user.username, user.password);
		//user = Restangular.all('user/login').post(user);
		//Api.user.login(user);
	};

});
