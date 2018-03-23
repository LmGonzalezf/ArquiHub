<<<<<<< HEAD

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var cerradura   = new Schema({
    name: String,
    id: String,
    tipo: String,
});

module.exports = mongoose.model('cerradura', cerradura);
=======

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var cerradura   = new Schema({
    name: String,
    codigo: String,
    tipo:String,
});

module.exports = mongoose.model('cerradura', cerradura);
>>>>>>> 3b823f3f5b955a303bea8341e7ad058a436af440
