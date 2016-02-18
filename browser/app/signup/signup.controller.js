'use strict';

app.controller('SignUpCtrl', function ($scope, Auth) {

	$scope.submitSignUp = function() {
		Auth.submitSignUp($scope.signup)


	}

	$scope.getCurrentUser = function() {
		console.log(Auth.getCurrentUser());
		return Auth.getCurrentUser();	
	}



	
});