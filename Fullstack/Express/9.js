const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

app.use(morgan('dev'))

app.use(helmet())
app.use(cors())

app.get('/market', function(req, res) {
    res.send('sannuuuuu');
})

app.listen(3000)