'use strict';

app.controller('SignUpCtrl', function ($scope, Auth) {

	$scope.submitSignUp = function() {
		Auth.submitSignUp($scope.signup);
	}

	
});