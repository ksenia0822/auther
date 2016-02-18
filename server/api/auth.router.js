
var router = require('express').Router();

var User =require('./users/user.model');

router.get('/auth/me', function (req, res, next) {
	User.findOne(req.session.userId)
	.exec()
	.then(function (user) {
		if(!user) {
			res.redirect('/');
		} else {
			res.json(user);			
		}
	})
	.then(null, next);
});	

module.exports = router;