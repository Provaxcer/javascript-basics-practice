const express = require('express')
const app = express()
const port = 3000

let data = []


app.get('/', (req, res) => {
    res.send(data)
})

app.post('/', (req, res) => {

    function details() {
        data.push(
            {
                name: "Sanu",
                Age: 23
            }
        )
    }
    res.send(details)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
