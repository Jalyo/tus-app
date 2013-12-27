'use strict';

var tusApp = angular.module('tusApp');


tusApp.controller('CreateStoryCtrl', function ($scope, Api) {

	$scope.save = function(story) {
		var date = new Date(story.date);
		story.date = date.getTime();
		story.user = 1;
		Api.story.post(story);
	};

});
