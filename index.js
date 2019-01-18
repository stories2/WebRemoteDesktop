const express = require('express')
const PORT = process.env.PORT || 5000

const serverApp = express()

const publicRoute = require('./Route/publicRoute')

serverApp.get('/', publicRoute.hello)
serverApp.listen(PORT, function(){
    console.log(`Listening on ${ PORT }`)
})