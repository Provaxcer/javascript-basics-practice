const express = require('express')
const app = express()

app.use(express.json()) // built-in middleware — parses JSON body

// Custom middleware — checks if market is open before allowing trades
function marketCheck(req, res, next) {
  const hour = new Date().getHours()  // get current hour (0-23)

  if (hour < 9 || hour > 15) {        // market closed outside 9am-3pm
    res.send('Market is closed')       // stop here, don't go further
    return                             // return so next() is not called
  }

  next()                               // market is open, continue
}

// Apply marketCheck only to this one route
app.post('/trade', marketCheck, function(req, res) {
  res.send('Trade placed successfully')
})

app.listen(3000)