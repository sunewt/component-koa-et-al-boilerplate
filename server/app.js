"use strict";

var resolve = require('path').resolve,
    fs = require('fs');

// Middleware
var serveStatic = require('koa-static'),
    compress = require('koa-compress'),
    logger = require('koa-logger'),
    koa = require('koa');

var app = module.exports = koa();

var root = resolve(__dirname, '..');

app.use(logger());

app.use(compress());

if (process.env.NODE_ENV === 'development') {
    console.log("Starting server in development mode");
    require('./devel');
} else {
    app.use(serveStatic(resolve(root, 'build')));
}

// Serve everything in the "public" folder
app.use(serveStatic(resolve(root, 'public')));

// Add routing
require('./router');

/* Serve default content. Required for how we're doing non-fragment based routing */
var defaultPage = fs.readFileSync(resolve(process.cwd(), './public/index.html'), { encoding: 'UTF-8' });
app.use(function *(next) {
    // Defer to later middleware
    yield next;

    // Response is already handled
    if ((this.body && this.body !== null) || this.status !== 404) {
        return;
    }

    this.body = defaultPage;
});