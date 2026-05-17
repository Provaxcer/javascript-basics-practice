const express = require('express')
const router = express.Router()

const {getAllTrades, placeTrade} = require('../controller/tradeController')

router.get('/', getAllTrades)
router.post('/', placeTrade)

module.exports = router