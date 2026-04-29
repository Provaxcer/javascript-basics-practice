const fs = require('fs').promises;
const path = require('path');

async function getFileData() {
  try {
    const filePath = path.join(__dirname, 'san.txt');
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getFileData();