const express = require('express')
const app = express()

app.get('/stock/:symbol', function(req, res) {
  const symbol = req.params.symbol
  res.send("Fetching price for: " + symbol)
})
app.get('/trades', function(req, res) {
  const page = req.query.page
  const type = req.query.type
  res.send(`Showing ${type} trades, ${page}`)
})

app.listen(3000)