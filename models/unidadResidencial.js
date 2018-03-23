<<<<<<< HEAD
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
=======
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
>>>>>>> 3b823f3f5b955a303bea8341e7ad058a436af440
