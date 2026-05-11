import chalk from 'chalk';
import colors from 'yoctocolors';
const log = console.log;
log(chalk.red('Hello world!'));
log(chalk.red('Hello world!'));
log(chalk.bgYellow('Hello world!'));


log(colors.red('Yo!'));

log(colors.blue(`Welcome to the ${colors.green('yoctocolors')} package!`));


log(chalk.green(    
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));