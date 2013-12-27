'use strict';

angular.module('tusApp')
.service('Api', function Api(Restangular, $http) {

	Restangular.setBaseUrl('http://localhost:1337');

	// save session helper
	function saveSession(id, token) {

        // save token and id in sessionStorage
        if (Modernizr.sessionstorage) {
        	sessionStorage.setItem('_id', id);
        	sessionStorage.setItem('_token', token);
        }

        // set _id and _token
        _id = id;
        _token = token;

        // set Authorization Header
        $http.defaults.headers.common.Authorization = 'Basic ' + btoa(_token);
    }

	// clear sesion helper
	function clearSession() {
		if (Modernizr.sessionstorage) {
			sessionStorage.removeItem('_id');
			sessionStorage.removeItem('_token');
		}

		_id = undefined;
		_token = undefined;

		$http.defaults.headers.common.Authorization = undefined;
	}

	var login = function (username, password, success, error) {

		return Restangular.
		one('user').
		get('login', { password: password, username: username }).
		then(
			function successAction(user) {
				saveSession(user.id, user.token);
				success(user);

			},
			function errorAction(err) {
				clearSession();
				error(err);
			});
	}

	var api = 
	{
		user : Restangular.all('user'),
		auth : Restangular.all('auth'),
		story : Restangular.all('story'),
		login : login
	};

	return api;
});
