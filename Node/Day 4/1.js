const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'trades.csv');
// reading data from the csv
const readData = fs.readFileSync(filePath, 'utf-8')
// writing on the backup txt
fs.writeFileSync('backup.txt', readData)
const header = readData.split('\n')
const heading = header[0].split(',')
const rows = header.slice(1);
const trades = rows.map(row => {
  const values = row.split(',');

  return {
  stock: values[0],
  quantity: Number(values[1]),
  price: Number(values[2])
};
});

trades.forEach(trade => {
  console.log(trade.stock, trade.quantity, trade.price);
});