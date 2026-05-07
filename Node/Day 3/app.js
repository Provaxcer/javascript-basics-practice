// app.js
const stockinfo = require("./stockInfo")
console.log(`${stockinfo.symbol} is trading at ${stockinfo.ltp}, up ${stockinfo.change}%`)