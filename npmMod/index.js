const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red.underline.inverse('False'));
// console.log(chalk.green.underline.inverse('True'));

const validator = require("validator");

const email = validator.isEmail("khalid@khalid.com");
console.log(email ? chalk.green.inverse(email) :  chalk.red.inverse(email));