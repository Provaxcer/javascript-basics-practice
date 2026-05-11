const express = require('express')
const app = express()

// This is a middleware function
// notice the 3 parameters: req, res, next
function logger(req, res, next) {
  console.log('Request came in:', req.method, req.url) // log every request
  next() // MUST call next() to pass control to the next step
}

app.use(logger) // apply this middleware to ALL routes

app.get('/', function(req, res) {
  res.send('Home page') // this runs AFTER logger runs
})

app.get('/trades', function(req, res) {
  res.send('Trades page') // logger runs before this too
})

app.listen(3000)