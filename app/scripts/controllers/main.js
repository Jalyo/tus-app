'use strict';

var tusApp = angular.module('tusApp');


tusApp.controller('MainCtrl', function ($scope, Api, Utils) {
	
	Api.story.getList()
	.then(function(stories) {


		_.forEach(stories, function(story) {
			Api.user.get(story.user).then(function(user){
				story.user = user;
			});
		});

		$scope.stories = stories;
	});

});
