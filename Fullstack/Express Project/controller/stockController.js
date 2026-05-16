function getAllTrades(req, res) {
    const data = req.body
    res.json({
        data
    })
}

function getStockBySymbol (req, res){
    const symb = req.params.symbol
    res.send(`This is the trade symbol ${symb}`)
}

module.export = {getAllTrades, getStockBySymbol}