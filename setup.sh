#!/bin/sh

echo "Installing tools"
echo "-- Component"
npm install -g component@">=1.0.0-rc5"
echo "-- Supervisor"
npm install -g supervisor
echo "-- Mocha"
npm install -g mocha
echo "Installing dependencies"
npm install
