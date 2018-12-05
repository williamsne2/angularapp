process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var path = require('path'),
    fs = require('fs'),
    https = require('https');


var certOptions = {
    key: fs.readFileSync(path.resolve('server.key')),
    cert: fs.readFileSync(path.resolve('server.crt'))
}

var db = mongoose();
var passport = passport();
var app = express();

var port = 3001;
/*app.listen(port, () => {
    console.log('Server running at ' + port);
});*/

var server = https.createServer(certOptions, app).listen(port, () => {
    console.log('Server running at port ' + port);
});

module.exports = app;