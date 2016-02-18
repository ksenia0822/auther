'use strict';

app.factory('Auth', function($http, $state){

return {

	submitSignUp: function(signup){
		return $http.post('/signup', signup)
		.then(function(user) {
			return user.data;
		})
		.then(function(user){
			$state.go('user', {id: user._id})
		}).catch(console.error)
	},

	submitLogin: function(login){


		return $http.post('/login', login)
			.then(function(){
			$state.go('stories')
		}).catch(console.error)
	}


	

		
	

	}
	


})