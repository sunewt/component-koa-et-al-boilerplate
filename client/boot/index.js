"use strict";

var page = require('page'),
    Welcome = require('welcome');

// Add the layout
var appContainer = document.querySelector('#app');
appContainer.insertAdjacentHTML('beforeend', require('./layout.html'));

// Select the actual content container
var container = document.querySelector('#content');

page('*', section);
page();

function section(context) {
    var pageFromPath = context.pathname.charAt(0) === '/' ? context.pathname.substring(1) : context.pathname;

    if (pageFromPath.length > 0) {
        /*
         * TODO sunewt for some reason we need to add ./client/ for actual builds.
         * Only development builds seem to work without the prefix
         */
        var PageModule = require('./client/' + pageFromPath);
        switchToPage(new PageModule());
    } else {
        switchToPage(new Welcome());
    }
}

function switchToPage(page) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.appendChild(page.el);
}