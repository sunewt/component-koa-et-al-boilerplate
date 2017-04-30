# Component, Koa & friends boilerplate

Boilerplate for a Koa backend and a frontend built using component with emphasis on using light-weight dependencies.

The project incorporates following "features":
* LiveReload via [koa-livereload](https://github.com/yosuke-furukawa/koa-livereload) and LiveReload server via [tiny-lr](https://github.com/mklabs/tiny-lr) and [watch](https://github.com/mikeal/watch)
* Automatic component client build via [component-koa](https://github.com/component/koa.js) when in development env (works well with LiveReload)
* Automatic Koa reloading on server-side changes via [node-supervisor](https://github.com/isaacs/node-supervisor/)

Server includes following examples:
* Development environment with LiveReload and automatic reload on backend changes
* Routing via [koa-route](https://github.com/koajs/route)
* A * style server that always serves the client side code when no other files/endpoints are hit (used for client side routing without fragments)
* Tests using [mocha](http://mochajs.org/)

Client includes following examples:
* A component consisting purely of CSS (by coincidence, purecss)
* Routing and "page module loading" via [page.js](https://github.com/visionmedia/page.js)
* Including templates via [domify](https://github.com/component/domify)
* Template/view /w bindings via [reactive](https://github.com/component/reactive)

Inspired by and in part adapted from projects such as [boilerplate-koa](https://github.com/component/boilerplate-koa), [component.io](https://github.com/component/component.io) and others.

## Requires following tools on PATH
* Node >= 0.11.9
* NPM

## Running example

    $ ./setup.sh
    Installing tools
    -- Component
    -- Supervisor
    -- Mocha
    Installing dependencies
    
    $ ./devel.sh
    Installing dependencies
    Setting environment to development
    Starting application
    
    (...)
    
    Starting server in development mode
    Application listening on port 9000.

### Windows
1. Hit setup.cmd (may need to be run as administrator as it contains npm global installs)
1. Hit devel.cmd
1. Success

### unix and derivatives
1. `./setup.sh`
1. `./devel.sh`
1. Success
