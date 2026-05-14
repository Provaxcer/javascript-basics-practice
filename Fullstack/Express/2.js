const express = require('express')
const app = express()

app.use(express.json())

app.get('/journal', function (req, res) {
    res.send("Fetching all trades")
})
app.post('/journal', function (req, res) {
    const trade = req.body
    console.log(trade)
    res.send('Trade logged: ' + JSON.stringify(trade))
})

app.put('/journal', function (req, res) {
    res.send("Trade updated")
})

app.delete('/journal', function (req, res) {
    res.send("Trade removed")
})

app.listen(3000, function () {
    console.log('Trading API running')
})