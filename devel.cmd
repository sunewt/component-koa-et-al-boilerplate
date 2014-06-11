@ECHO OFF
ECHO Installing dependencies
CALL npm install
ECHO Setting environment to development
SET NODE_ENV=development
ECHO Starting application
CALL npm run-script start-devel