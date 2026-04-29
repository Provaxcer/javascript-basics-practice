const fs = require('fs').promises;
const path = require('path');

async function getFileData() {
  try {
    const filePath = path.join(__dirname, 'example.txt');
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

getFileData();