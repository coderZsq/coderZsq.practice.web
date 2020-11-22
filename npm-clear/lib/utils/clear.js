const fs = require('fs');
const path = require('path');

const { program } = require('commander');
require('colors');

const cleaRemoveodules = () => {
  const dir = program.dest || path.resolve(__dirname, '../../../../');
  console.log('Clear Path: '.cyan + dir);
  checkdir(dir);
  readdir(dir);
}

const checkdir = (dir) => {
  if (!fs.existsSync(dir)) {
    throw 'The path does not exist, Please check again!';
  }
};

const rmdir = (dir) => {
  let files = fs.readdirSync(dir, { withFileTypes: true });
  for (let file of files) {
    const _dir = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      rmdir(_dir);
    } else {
      fs.unlinkSync(_dir);
      console.log('Remove File: '.red + _dir);
    }
  }
  fs.rmdirSync(dir);
  console.log('Remove Folder: '.magenta + dir);
};

const readdir = (dir) => {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    for (let file of files) {
      if (file.isDirectory() && file.name.slice(0, 1) !== '.') {
        if (file.name === 'npm-clear') continue;
        const _dir = path.resolve(dir, file.name);
        if (file.name === 'node_modules') {
          rmdir(_dir);
        } else {
          readdir(_dir);
        }
      }
    }
  });
};

module.exports = cleaRemoveodules;