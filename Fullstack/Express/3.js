const express = require('express')
const app = express()

// Fetch details of one specific stock by its symbol
app.get('/stock/:symbol', function(req, res) {
  const symbol = req.params.symbol        // e.g. "INFY" from /stock/INFY
  res.send('Fetching data for: ' + symbol)
})

// Fetch trade history with optional filters
app.get('/trades', function(req, res) {
  const page = req.query.page             // ?page=2
  const type = req.query.type             // ?type=buy
  res.send('Page: ' + page + ', Type: ' + type)
})
// visiting /trades?page=1&type=buy → "Page: 1, Type: buy"

app.listen(3000)