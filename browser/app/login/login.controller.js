'use strict';

app.controller('LoginCtrl', function ($scope, Auth) {

	$scope.submitLogin = function() {	
		Auth.submitLogin($scope.login)
	}

	$scope.getCurrentUser = function() {
		console.log(Auth.getCurrentUser());
		return Auth.getCurrentUser();	
	}


});