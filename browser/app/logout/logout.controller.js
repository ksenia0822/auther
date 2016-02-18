app.controller('Logout', function($scope, $state, $http) {

	$scope.logout = function() {
		console.log('i logged out')
		return $http.get('/')
		.then(function() {		
			$state.go('home');
		})
	}
})