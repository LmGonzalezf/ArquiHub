// app/models/unidadResidencial.js


var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var cerraduraSchema   = new Schema({
    name: String,
    codigo: String,
    tipo:String
});
var hubSchema   = new Schema({
    name: String,
    codigo: String,
    cerradura: [cerraduraSchema]
});
var inmuebleSchema   = new Schema({
    name: String,
    codigo: String,
    hub: [hubSchema]
});
var unidadResidencialSchema   = new Schema({
    name: String,
    codigo: String,
    inmueble: [inmuebleSchema]
});


module.exports = mongoose.model('unidadResidencial', unidadResidencialSchema);
