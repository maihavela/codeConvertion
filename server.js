// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var conversionModel = require("controllers/conversionModel.js");
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
// on routes that end in /converte/2Morse
// ----------------------------------------------------
router.post('/converte/2Morse', function(req, res) {
        conversionModel.toMorse(function(err) {
            if (err)
                res.send(err);
            //Aca quiero que la respuesta sea de este tipo
            res.json({
                "success": {
                    "total": 1
                },
                "contents": {
                    "translated": res, //quiero mostrar el texto de salida convertido
                    "text": req, // quiero mostrar el texto de entrada
                    "translation": {
                        "source": "text",
                        "destination": "morse"
                    }
                }
        });
        });

    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
