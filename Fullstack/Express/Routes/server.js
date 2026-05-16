const express = require('express')
const app = express()
const tradeRoute = require('./routes/trades')
const stockRoute = require('./routes/stocks')

app.use(express.json())

app.use('/trades', tradeRoute)
app.use('/stocks', stockRoute)


app.listen(3000)