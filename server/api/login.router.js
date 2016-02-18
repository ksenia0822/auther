'use strict';

var router = require('express').Router();

var User =require('./users/user.model');

router.post('/', function(req, res, next) {
	User.findOne({
		email: req.body.email, 
		password: req.body.password
	})
	.exec()
	.then(function(user) {
		if (!user) {
			res.sendStatus(401);
		} else {
			req.session.userId = user._id;
			res.sendStatus(200)
		}
		

	})
	.then(null, next);

})
module.exports = router;