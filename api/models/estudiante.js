// etudiantes model

'use strict';

let mongoose = require('mongoose');

let	estudianteSchema = new mongoose.Schema({
	name: String,
	grupo: String
});

// module.exports = mongoose.model('Estudiante', estudianteSchema);
mongoose.model('Estudiante', estudianteSchema);