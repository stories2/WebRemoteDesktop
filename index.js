//Packages
const express = require('express')
const PORT = process.env.PORT || 5000
//Express
const serverApp = express()
//Modules
const publicRoute = require('./Route/publicRoute')
//Global
global.define = require('./Settings/defineManager')
global.log = require('./Utils/logManager')
//Config
serverApp.get('/', publicRoute.hello)
serverApp.listen(PORT, function(){
    global.log.debug("index", "listen", "Listening on " + PORT)
})