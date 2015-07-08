#!/bin/sh

echo "Building client"
component build
echo "Setting environment to production"
export NODE_ENV=production
echo "Starting application"
npm start