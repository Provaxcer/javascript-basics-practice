    const express = require('express')
    const router = express.Router()

    const {getAllTrades, getStockBySymbol} = require('../controller/stockController')

    router.get('/', getAllTrades)
    router.get('/:symbol', getStockBySymbol)

    module.exports = router