const express = require('express')
const app = express()

function requestTimer(req, res, next) {
    const time = new Date().toLocaleTimeString()
    console.log(`[${time}] ${req.method} ${req.url}`)
    next()
}

// app.use(requestTimer)

app.get('/trades',requestTimer,  function (req, res) { res.send('Trades') })
app.get('/portfolio', function (req, res) { res.send('Portfolio') })

app.listen(3000)