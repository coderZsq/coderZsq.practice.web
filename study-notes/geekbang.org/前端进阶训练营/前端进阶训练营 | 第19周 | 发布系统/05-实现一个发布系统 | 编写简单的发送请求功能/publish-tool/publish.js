let http = require('http');

let request = http.request(
  {
    hostname: '172.16.23.125',
    port: 3000,
  },
  (response) => {
    console.log(response);
  }
);

request.end();
