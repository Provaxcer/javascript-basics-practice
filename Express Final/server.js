const express = require('express');
const app = express()
const createRoute = require('./Routes/mainroute');

app.use(express.json())

app.use('/', createRoute)

app.listen(3000)