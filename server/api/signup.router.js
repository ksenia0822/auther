'use strict';

var router = require('express').Router();

var User =require('./users/user.model');

router.post('/', function (req, res, next) {

	User.create(req.body)
	// .then(function (user) {
	// 	//console.log('user.data', user.data)
	// 	return user.data
	// })
	.then(function(user) {
		req.session.userId = user._id;
		console.log("REQ SESSION ",req.session)
		console.log('user is ', user)
		res.status(201).json(user);
	})
	.then(null, next);
});


module.exports = router;