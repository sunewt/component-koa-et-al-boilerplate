"use strict";

var domify = require('domify'),
    reactive = require('reactive'),
    template = require('./welcome.html');

module.exports = Welcome;

function Welcome() {
    this.el = domify(template);
    this.view = reactive(this.el, { name: 'Stranger'});
}