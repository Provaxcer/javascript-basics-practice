const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send("Welcome to Market API")
})

app.get('/gold-price', function(req, res) {
  res.send('Gold is at 150$')
})

app.get('/usd-inr', function(req, res) {
  res.send('Rate is 1.5Lakhs INR')
})

app.listen(3000, function() {
  console.log('Stock API running on port 3000')
})