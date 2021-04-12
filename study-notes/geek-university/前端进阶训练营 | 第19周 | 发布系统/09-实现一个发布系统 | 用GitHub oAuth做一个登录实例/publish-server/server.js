let http = require('http');
let https = require('https');
let unzipper = require('unzipper');
let querystring = require('querystring');

// 2. auth路由: 接受code, 用code+client_id+client+secret换token
function auth(request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, function (info) {
    console.log(info);
    // response.write(JSON.stringify(info));
    response.write(
      `<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`
    );
    response.end();
  });
}

function getToken(code, callback) {
  let request = https.request(
    {
      hostname: 'github.com',
      path: `/login/oauth/access_token?code=${code}&client_id=Iv1.f947c55b3eed8e5d&client_secret=86c3a8cea99095636c5f65739fd44dfe205c4e43`,
      port: 443,
      method: 'POST',
    },
    function (response) {
      let body = '';
      response.on('data', (chunk) => {
        body += chunk.toString();
      });
      response.on('end', (chunk) => {
        callback(querystring.parse(body));
      });
    }
  );
  request.end();
}

// 4. publish路由: 用token获取用户信息, 检查权限, 接受发布
function publish(request, response) {
  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);

  getUser(query.token, (info) => {
    if (info.login === 'coderZsq') {
      request.pipe(unzipper.Extract({ path: '../server/public/' }));
      request.on('end', function () {
        response.end('success!');
      });
    }
  });

  // https://api.github.com/user
}

function getUser(token, callback) {
  let request = https.request(
    {
      hostname: 'api.github.com',
      path: `/user`,
      port: 443,
      method: 'GET',
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'toy-publish',
      },
    },
    function (response) {
      let body = '';
      response.on('data', (chunk) => {
        body += chunk.toString();
      });
      response.on('end', (chunk) => {
        callback(JSON.parse(body));
      });
    }
  );
  request.end();
}

http
  .createServer(function (request, response) {
    if (request.url.match(/^\/auth\?/)) return auth(request, response);
    if (request.url.match(/^\/publish\?/)) return publish(request, response);
    // console.log('request');
    // let outFile = fs.createWriteStream('../server/public/index.html');
    // let outFile = fs.createWriteStream('../server/public/tmp.zip');
    // request.pipe(outFile);
    // request.pipe(unzipper.Extract({ path: '../server/public/' }));
  })
  .listen(8082);
