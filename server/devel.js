"use strict";

var resolve = require('path').resolve;

var app = require('./app');

var root = resolve(__dirname, '..');

// Pretty JSON please
app.use(require('koa-json')());

// Serve component builds
var serveComponent = require('component-koa');
app.use(serveComponent({
    path: '/build',
    development: true
}));


// Set up LiveReload
// Inject LiveReload script
app.use(require('koa-livereload')());

// Set up LiveReload server
var liveReloadServer = require('tiny-lr')();
liveReloadServer.listen(35729, function () {
    console.log('LiveReload listening on %s ...', 35729);
});

var watch = require('watch');
watch.watchTree(resolve(root, "client"), function (files) {
    console.log('Live reloading ' + (typeof files === 'object' ? Object.keys(files).join() : files) + '...');
    liveReloadServer.changed({body: {files: files}});
});