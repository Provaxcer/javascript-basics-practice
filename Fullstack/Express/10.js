const express = require('express')
const app = express()

app.use(express.json())

app.get('/stock/:symbol', function (req, res, next) {
    const symbol = req.params.symbol
    if (symbol !== 'NIFTY') {
        const err = new Error('Stock not found')
        err.status = 404
        return next(err)
    }
    res.send('NIFTY is at 2400')
})

app.use(function (err, req, res, next) {
    const status = err.status || 500
    res.status(status).send(err.message)
})

app.listen(3000)