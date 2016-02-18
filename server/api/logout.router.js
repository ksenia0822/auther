var router = require('express').Router();

var User =require('./users/user.model');

router.get('/', function(res, req, next) {
	req.session.userId = null;
	res.redirect('/');
})

module.exports = router;