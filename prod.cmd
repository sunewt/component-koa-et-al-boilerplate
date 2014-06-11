@ECHO OFF
ECHO Building client
call component build
ECHO Setting environment to production
SET NODE_ENV=production
ECHO Starting application
CALL npm start