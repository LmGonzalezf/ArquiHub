<<<<<<< HEAD
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
=======
// app/models/inmueble.js

var hub = require('./hub.js')
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var inmueble   = new Schema({
    name: String,
    codigo: String,
    hub: hub,
});

module.exports = mongoose.model('inmueble', inmueble);
>>>>>>> 3b823f3f5b955a303bea8341e7ad058a436af440
