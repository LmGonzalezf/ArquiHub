<<<<<<< HEAD
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var hub   = new Schema({
    name: String,
    codigo: String,
    idCerradura: String,
});

module.exports = mongoose.model('hub', hub);
=======
var cerradura = require('./cerradura.js')
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var hub   = new Schema({
    name: String,
    codigo: String,
    cerradura: cerradura,
});

module.exports = mongoose.model('hub', hub);
>>>>>>> 3b823f3f5b955a303bea8341e7ad058a436af440
