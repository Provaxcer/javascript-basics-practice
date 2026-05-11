const express = require('express')
const app = express()

// When someone visits /nifty-price, send back a fake stock price
app.get('/nifty-price', function(req, res) {
  res.send('NIFTY 50 is at 22,450')  // respond with price data
})

// When someone visits /market-status, tell them if market is open
app.get('/market-status', function(req, res) {
  res.send('Market is open')          // respond with status
})

app.listen(3000, function() {
  console.log('Stock API running on port 3000')
})