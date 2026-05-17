function getAllTrades(req, res) {
    const data = req.body
    res.json({
        data
    })
}

function placeTrade (req, res){
    res.send("Trade Placed")
}

module.exports = {getAllTrades, placeTrade}