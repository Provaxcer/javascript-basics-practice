const express = require('express')
const app = express()
app.use(express.json())

app.post('/trade', function(req, res) {
  const stock = req.body.stock
  const qty = req.body.qty
  const type = req.body.type

  if (!stock || !qty || !type) {
    return res.status(401).json({
      error: "stock, qty and type are required"
    })
  }

  if (type !== "buy" && type !== "sell") {
    return res.status(402).json({
      error: "type must be buy or sell"
    })
  }

  res.status(201).json({
    owner : "sanu",
    message: 'Trade placed',
    trade: { stock, qty, type }
  })
})

app.listen(3000)