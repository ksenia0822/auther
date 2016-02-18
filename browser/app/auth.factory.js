'use strict';

app.factory('Auth', function($http, $state){
	var currentUser =  null;

	return {
		submitSignUp: function(signup){
			return $http.post('/signup', signup)
			.then(function(user) {
				currentUser = user.data;
				return user.data;
			})
			.then(function(user){				
				$state.go('user', {id: user._id})
			}).catch(console.error)
		},

		submitLogin: function(login){
			return $http.post('/login', login)
				.then(function(info){
				currentUser = info.data;
				// console.log('curUser ', currentUser)
				$state.go('stories')
			}).catch(console.error)
		},

		getCurrentUser: function() {
			return currentUser;
		}
	}
	
})