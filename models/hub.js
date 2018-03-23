var cerradura = require('./cerradura.js')
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var hub   = new Schema({
    name: String,
    codigo: String,
    cerradura: cerradura,
});

module.exports = mongoose.model('hub', hub);
