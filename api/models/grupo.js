// grupos model

'use strict';

let mongoose = require('mongoose');

let	grupoSchema = new mongoose.Schema({
	namegrupo: String
});

// module.exports = mongoose.model('Grupo', grupoSchema);
mongoose.model('Grupo', grupoSchema);