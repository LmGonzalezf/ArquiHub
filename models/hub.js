var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var hub   = new Schema({
    name: String,
    codigo: String,
    idCerradura: String,
});

module.exports = mongoose.model('hub', hub);
