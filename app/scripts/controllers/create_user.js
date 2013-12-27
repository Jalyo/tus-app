'use strict';

var tusApp = angular.module('tusApp');


tusApp.controller('CreateUserCtrl', function ($scope, Api) {

	$scope.save = function(user) {
		Api.user.post(user);
	};

});
