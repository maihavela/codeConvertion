var express = require('express');
var app = express();       
var bodyParser = require('body-parser');        

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());           

//http://localhost:8080/api
var router = require('./routes/index');
app.use('/api', router);

app.listen(port);
console.log('API escuchando en el puerto ' + port);
