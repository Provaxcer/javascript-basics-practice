let stockData = {
  symbol: "INFY",
  price: 1500,
  stats: null
};

function displayStock(stock) {
    console.log(stock.symbol);
    console.log(stock.price ?? "Price unavailable");
    console.log(stock?.stats?.high ?? "NA");
    
}

displayStock(stockData)