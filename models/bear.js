// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
    codigo: String
    date: Date
    descripcion: String
});

module.exports = mongoose.model('Bear', BearSchema);
