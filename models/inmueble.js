// app/models/inmueble.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
 
var inmueble   = new Schema({
    name: String,
    codUnidadResidencial: String,
    codigo: String,
    codhub: String,
});

module.exports = mongoose.model('inmueble', inmueble);
