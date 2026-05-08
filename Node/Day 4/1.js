const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'trades.csv');
// reading data from the csv
const readData = fs.readFileSync(filePath, 'utf-8')
// writing on the backup txt
fs.writeFileSync('backup.txt', readData)

const txtData = fs.readFileSync('backup.txt', 'utf-8')
const header = txtData.split('\n')
const heading = header[0].split(',')
const rows = header.slice(1);
console.log(rows);