
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var cerradura   = new Schema({
    name: String,
    codigo: String,
    tipo:String,
});

module.exports = mongoose.model('cerradura', cerradura);