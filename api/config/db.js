// Mongodb connection config

'use strict';


let	mongoose 		= require('mongoose'),
		dbURI 			= 'mongodb://localhost/test';

// connect to mongodb
mongoose.connect(dbURI);

// bring in schemas and models
require('../models/grupo');
require('../models/estudiante');