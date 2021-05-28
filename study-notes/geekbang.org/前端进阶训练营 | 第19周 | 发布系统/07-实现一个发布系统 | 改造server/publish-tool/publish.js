let http = require('http');
let fs = require('fs');

let request = http.request(
  {
    hostname: '172.16.23.125',
    port: 8082,
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  },
  (response) => {
    console.log(response);
  }
);

let file = fs.createReadStream('./sample.html');

file.on('data', (chunk) => {
  console.log(chunk.toString());
  request.write(chunk);
});

file.on('end', (chunk) => {
  console.log('read finished');
  request.end(chunk);
});
