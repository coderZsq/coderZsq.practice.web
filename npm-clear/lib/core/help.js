const program = require('commander');

const helpOptions = () => {
  program
    .option('-d, --dest <dest>', 'clear all node_modules in this folder');
}

module.exports = helpOptions;