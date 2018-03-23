// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var alarmas     = require('./models/alarmas');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var url = 'mongodb://localhost:27017/ArquiHub';

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database joined");
});
console.log(mongoose.connection.readyState);
var db = mongoose.connection;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  console.log(mongoose.connection.readyState);
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------


router.route('/alarmas')

    .get(function(req, res) {
      console.log('entró 1');
        alarmas.find({}, function finded(err, media){
          if(err){console.log('errosrasfjabf')};
          console.log(media);
          res.json({media});
        }); console.log('JUEPUTA');
    })

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





// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
