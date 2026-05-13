const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'sanu')))

app.post('/trade', function(req, res) {
  const stock = req.body.stock
  const qty = req.body.qty
  console.log(`Trade: ${qty} units of ${stock}`)
  res.send('Trade placed')
})

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'sanu', 'index.html'))
})

app.listen(3000)