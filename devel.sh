#!/bin/sh

echo "Installing dependencies"
npm install
echo "Setting environment to development"
export NODE_ENV=development
echo "Starting application"
npm run-script start-devel