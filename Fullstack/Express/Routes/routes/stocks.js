const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', function (req,res){
    res.send('Main site')
})

router.get('/:symbol', function (req, res){
    const symb = req.params.symbol
    res.send(`Looking for ${symb} stock`)
})

module.exports = router