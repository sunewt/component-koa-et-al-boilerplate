"use strict";

var port = process.env.PORT || 9000;
var server = module.exports = require('./app').listen(port);

console.log('Application listening on port ' + port + '.');