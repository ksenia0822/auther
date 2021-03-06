'use strict'; 

var app = require('express')();
var path = require('path');
var session = require('express-session');

app.use(session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'tongiscool'
}));

// place right after the session setup middleware
app.use(function (req, res, next) {
    console.log('session', req.session);
    next();
});


app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));

app.use('/login', require('../api/login.router'));

app.use('/signup', require('../api/signup.router'));

app.use('/', require('../api/logout.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;