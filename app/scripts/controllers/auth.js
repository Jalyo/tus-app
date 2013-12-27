'use strict';

angular.module('tusApp')
.controller('AuthCtrl', function ($scope, Api) 
{

	Api.auth.customPOST({email : "ja.activestate@gmail.com", password : "blabla"}, "process").then(function(err, data)
	{
		console.log(err,data);
	});

});
