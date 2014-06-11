@ECHO OFF
ECHO Installing tools
ECHO -- Component
CALL npm install -g component@">=1.0.0-rc5"
ECHO -- Supervisor
CALL npm install -g supervisor
ECHO -- Mocha
CALL npm install -g mocha
ECHO Installing dependencies
CALL npm install
