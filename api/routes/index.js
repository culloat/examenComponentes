// API routes entry point

'use strict';

let express 	= require('express'),
		apiRouter = express.Router(),
		ctrlColegio = require('../controllers/colegio');


// MIDDLEWARE to use for all requests
apiRouter.use((req, res, next) => {
	// do something before running routes
	console.log('Happening before routes...');
	next();   // don't stop here, go to next route
});


// on routes that end in /beers
apiRouter.route('/grupos')
	// create a grupo (http://localhost:8080/api/grupos)
	.post(ctrlColegio.gruposCreate)
	// get all grupos (http://localhost:8080/api/grupos)
	.get(ctrlColegio.gruposListAll);

apiRouter.route('/estudiantes')
	// create a estudiante (http://localhost:8080/api/estudiantes)
	.post(ctrlColegio.estudiantesCreate)
	// get all estudiantes (http://localhost:8080/api/estudiantes)
	.get(ctrlColegio.estudiantesListAll);

// on routes that end in /estudiantes/:idGrupo
apiRouter.route('/estudiantes/:namegrupo')
	// get a estudiantes by idGrupo (http://localhost:8080/api/estudiantes/:idGrupo)
	.get(ctrlColegio.estudiantesListByNameGrupo)

	

// export router module
module.exports = apiRouter;