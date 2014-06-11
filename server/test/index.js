"use strict";

var request = require('supertest');
var server = require('../serve');

describe('Appplication', function () {

    it('should serve build.js', function (done) {
        request(server)
            .get('/build.js')
            .expect('Content-Type', 'application/javascript')
            .expect(200, done);
    });

    it('should serve build.css', function (done) {
        request(server)
            .get('/build.css')
            .expect('Content-Type', 'text/css; charset=utf-8')
            .expect(200, done);
    });

    it('should serve json', function (done) {
        request(server)
            .get('/api/test')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });

});
