const express = require('express')
const router = express.route()

const {getAllTrades, placeTrade} = require('../controller/tradeController')



router.get('/', getAllTrades)
router.get('/:symbol', getStockBySymbol)
router.get('/data', getAllTrades)
router.get('/place', placeTrade)