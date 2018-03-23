// app/models/unidadResidencial.js

var inmueble = require('./inmueble.js')
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var inmuebles = new Array();

var unidadResidencial   = new Schema({
    name: String,
    codigo: String,
    inmueble: inmuebles,
});

module.exports = mongoose.model('unidadResidencial', unidadResidencial);
