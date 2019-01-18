//Packages
const express = require('express')
const expressWs = require('express-ws')
// const socketServer = require('ws').Server;
//Express
const serverApp = express()
//Routes
const publicRoute = require('./Route/publicRoute')
const socketRoute = require('./Route/socketRoute')
//Global
global.define = require('./Settings/defineManager')
global.log = require('./Utils/logManager')

//Env
const PORT = process.env.PORT || 5000
//Websocket
// const wss = new socketServer({ server: serverApp, path: "/remote" });
// socketRoute.init(wss)
expressWs(serverApp)
socketRoute.init(serverApp)
//Config
serverApp.set('views', './Views');
serverApp.set('view engine', 'ejs');
serverApp.engine('html', require('ejs').renderFile);
serverApp.use(express.static('Public'))

serverApp.get('/', publicRoute.hello)
serverApp.get('/Template/:template', publicRoute.getTemplate)

serverApp.listen(PORT, function(){
    global.log.debug("index", "listen", "Listening on " + PORT)
})
