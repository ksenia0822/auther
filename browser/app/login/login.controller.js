'use strict';

app.controller('LoginCtrl', function ($scope, Auth) {

	$scope.submitLogin = function() {
		Auth.submitLogin($scope.login)	
	}

	
	
});