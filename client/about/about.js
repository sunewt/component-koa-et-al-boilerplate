"use strict";

var domify = require('domify'),
    template = require('./about.html');

module.exports = About;

function About() {
    this.el = domify(template);
}