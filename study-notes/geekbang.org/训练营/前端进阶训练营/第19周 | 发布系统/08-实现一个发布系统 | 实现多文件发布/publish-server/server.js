let http = require('http');
// let fs = require('fs');
let unzipper = require('unzipper');

http
  .createServer(function (request, response) {
    console.log('request');
    // let outFile = fs.createWriteStream('../server/public/index.html');
    // let outFile = fs.createWriteStream('../server/public/tmp.zip');
    // request.pipe(outFile);

    request.pipe(unzipper.Extract({ path: '../server/public/' }));
  })
  .listen(8082);
