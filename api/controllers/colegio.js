// Colegio controller

'use strict';

// require('../models/grupo');
// require('../models/estudiante');

let mongoose = require('mongoose');
let	Grupo 		 = mongoose.model('Grupo');
let	Estudiante 		 = mongoose.model('Estudiante');
/**
 * Lista todos los grupos de la base de datos
 * @param  {[type]} req [request obj from client form]
 * @param  {[type]} res [response object to send status and data back to client]
 * @return {[type]} void - response object
 */
module.exports.gruposListAll = function (req, res) {
	Grupo.find((err, grupos) => {
		if (err) res.send(err);
		res.json(grupos);
	});
};
module.exports.estudiantesListAll = function (req, res) {
	Estudiante.find((err, estudiantes) => {
		if (err) res.send(err);
	res.json(estudiantes);
});
};

/**
 * Crea un nuevo grupo en la base de datos
 * @param  {[type]} req [request obj from client form]
 * @param  {[type]} res [response object to send status and data back to client]
 * @return {[type]} void - response object
 */
module.exports.gruposCreate = function (req, res) {
	let grupo = new Grupo();
	// populate new grupo
	grupo.namegrupo = req.body.namegrupo;
	// save new grupo to db
	grupo.save(err => {
		if (err) res.send(err);
		res.json({ message: 'Grupo created!' });
	});
};
/**
 * Crea un nuevo estudiante en la base de datos
 * @param  {[type]} req [request obj from client form]
 * @param  {[type]} res [response object to send status and data back to client]
 * @return {[type]} void - response object
 */
module.exports.estudiantesCreate = function (req, res) {
	let estudiante = new Estudiante();
	// populate new estudiante
	estudiante.name = req.body.name;
	estudiante.namegrupo = req.body.namegrupo;

	// save new estudiante to db
	estudiante.save(err => {
		if (err) res.send(err);
	res.json({ message: 'Estudiante created!' });
});
};

/**
 * Listar estudiantes por id grupo
 * @param  {[type]} req [request obj from client form]
 * @param  {[type]} res [response object to send status and data back to client]
 * @return {[type]} void - response object
 */
module.exports.estudiantesListByIdGrupo = function (req, res) {
	let namegrupo = req.params.namegrupo;
	Estudiante.find({"grupo":{"$regex": namegrupo}},(err, estudiantes) => {
		if (err) res.send(err);
	res.json(estudiantes);
});
};

