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
