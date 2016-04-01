// server.js (Express 4.0)

'use strict';

// BASE SETUP
// ==============================================

// call the packages we need
let express 		= require('express'),
		app 				= express(),
		bodyParser 	= require('body-parser'),
		port 				= process.env.PORT || 8080;

// require db config file which requres api models
require('./api/config/db');


// DEFINE THE MIDDLEWARE FOR APP - WILL HAPPEN 
// EVERYTIME THE APP RECEIVES A REQUEST
// ==============================================

// configure app to use bodyParser()
// this will let us get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log info every request
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// ROUTES
// ==============================================

// require routes module from api/routes
let apiRouter = require('./api/routes/index');

// routes 
// defined in separate file into the /api directory

// register our routes
// all routes will be prefixed with /api
app.use('/api', apiRouter);


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
