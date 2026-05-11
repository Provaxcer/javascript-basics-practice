const { Command } = require('commander');
const { log } = require('console');
const program = new Command();
const fs = require('fs')

program
  .name('count-characters')
  .description('CLI to count strings')
  .version('0.8.0');

program.command('count')
  .description('Count spaces in a sentence')
  .argument('<filename.txt>', 'Count spaces')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
      }
      else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") {
            words++;
          }
        }
        console.log(`There are ${words+1} in a sentence`);
      }
    })
  });

program.parse();