// app/models/unidadResidencial.js

var inmueble = require('./inmuebles.js')
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var unidadResidencial   = new Schema({
    name: String,
    codigo: String,
    inmueble: inmueble,
});

module.exports = mongoose.model('unidadResidencial', unidadResidencial);
