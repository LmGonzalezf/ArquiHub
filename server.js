// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var alarmas     = require('./models/alarmas'); //importar alarmas
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');    //importar body-parser
var mongoose   = require('mongoose');       //importar mongoose
var url = 'mongodb://localhost:27017/ArquiHub';    //url de la base de datos MongoDB
var mqtt = require('mqtt')                  // importar mqtt
var client  = mqtt.connect('mqtt:172.24.42.92:8083') ///// FALTA CONFIGURAR ESTO, IP de donde está alojado el MQTT


//CONEXIÓN A BASE DE DATOS
// =================================================================================
mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database joined");
});
var db = mongoose.connection; // Variable que representa la conexión


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// PARTE DE MQTT
// ==============================================================================
client.on('connect', function () {   //Cuando se conecte
  client.subscribe('alarmas')
  client.publish('alarmas', 'Hello mqtt')
})

client.on('message', function (topic, message) { //Cuando haya un mensaje
  // message is Buffer
  //var alarma = new alarmas();      // create a new instance of the Bear model
  //alarma.name = message.body.name;
  //alarma.descripcion = message.body.descripcion;
  //alarma.date = message.body.date;
  //alarma.codigo = message.body.codigo; // set the bears name (comes from the request)

  // save the bear and check for errors
  //alarma.save(function(err) {
  //    if (err)
  //        res.send(err);

  //    res.json({ message: 'Alarma created!' });
  //});
  console.log(message.toString())
  client.end()
})

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.'); //Siempre que esto aparezca en consola es porque algo entró.
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.send('Hola');
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------

// RUTAS PARA ALARMAS
// ===================================================================
router.route('/alarmas')

    //Get de todas las alarmas
    .get(function(req, res) {
        alarmas.find({}, function finded(err, media){
          if(err){console.log(err)};
          console.log(media);
          res.json({media});
        });
    })

    //Post de todas las alarmas
    //El cuerpo del post debe ser
    //  "name": String
    //  "codigo": String
    //  "descripcion": String
    //  "date": String
    .post(function(req, res) {

        var alarma = new alarmas();      // create a new instance of the Bear model
        alarma.name = req.body.name;
        alarma.descripcion = req.body.descripcion;
        alarma.date = req.body.date;
        alarma.codigo = req.body.codigo; // set the bears name (comes from the request)

        // save the bear and check for errors
        alarma.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Alarma created!' });
        });

    });


// RUTAS PARA UNIDAD RESIDENCIAL
// ============================================================


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
