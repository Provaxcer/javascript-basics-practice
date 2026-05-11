const stocks = [
    { symbol: "RELIANCE", price: 2850, volume: 1200000, change: 2.4 },
    { symbol: "TCS", price: 3920, volume: 850000, change: -1.2 },
    { symbol: "INFY", price: 1475, volume: 950000, change: 3.1 },
    { symbol: "HDFCBANK", price: 1620, volume: 2100000, change: -0.8 },
    { symbol: "WIPRO", price: 460, volume: 720000, change: 1.5 },
    { symbol: "ICICIBANK", price: 1050, volume: 1800000, change: 4.2 },
    { symbol: "SBIN", price: 780, volume: 3200000, change: -2.1 },
    { symbol: "BAJFINANCE", price: 6750, volume: 430000, change: 5.7 },
    { symbol: "TATAMOTORS", price: 920, volume: 2800000, change: -3.4 },
    { symbol: "ADANIENT", price: 2450, volume: 670000, change: 6.1 },
    { symbol: "SUNPHARMA", price: 1180, volume: 540000, change: 0.9 },
    { symbol: "ONGC", price: 265, volume: 4100000, change: -1.7 },
    { symbol: "MARUTI", price: 11200, volume: 180000, change: 2.8 },
    { symbol: "NTPC", price: 340, volume: 2600000, change: -0.5 },
    { symbol: "POWERGRID", price: 295, volume: 1500000, change: 1.1 },
    { symbol: "HCLTECH", price: 1350, volume: 760000, change: -4.2 },
    { symbol: "AXISBANK", price: 1090, volume: 1350000, change: 3.6 },
    { symbol: "ULTRACEMCO", price: 9800, volume: 95000, change: -0.3 },
    { symbol: "TITAN", price: 3300, volume: 310000, change: 2.2 },
    { symbol: "NESTLEIND", price: 2200, volume: 140000, change: -1.9 },
]

const arrLen = stocks.length;
    console.log(arrLen);


// filter by gainers

function gainers() {
    const result = stocks.filter(stock => stock.change > 0);

    for (const stock of result) {
        console.log(`Gainer: ${stock.symbol}`);
    }
}

gainers()

// sort by volume

function SortbyVol() {
    const result = [...stocks].sort((a, b) => b.volume - a.volume);

    for (const stockvol of result) {
        console.log(`Sort by volume: ${stockvol.volume}`);
    }
}
SortbyVol()

//  find highest price

function Highestprice() {
    const max = Math.max(...stocks.map(o => o.price));
    console.log(`The highest price is ${max}`);
}

Highestprice()

// calculate average change

function avgChange() {
    const total = stocks.reduce((sum, stock) => {
        return sum + stock.change;
    }, 0);

    console.log(total / stocks.length);
}

avgChange()