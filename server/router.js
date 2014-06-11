"use strict";

var app = require('./app'),
    r = require('koa-route');

var jsonTest = function *() {
    this.body = {
        "works": true,
        "works-well": true
    };
};

app.use(r.get('/api/test', jsonTest));