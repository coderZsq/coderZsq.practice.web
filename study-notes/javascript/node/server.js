const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const scoreData = require('./scores.json');
const staticServer = require('./static-server');
const template = require('art-template');

http.createServer((req,res) => {
    if (req.url.startsWith('/www')) {
        staticServer.staticServer(req, res, path.join(__dirname));
    } else if (req.url.startsWith('/query') && req.method === 'GET'){
        fs.readFile(path.join(__dirname,'view','index.tpl'),'utf8',(err,content)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain; charset=utf8'
                });
                res.end('服务器错误，请与管理员联系');
            }
            res.end(content);
        });
    } else if (req.url.startsWith('/score') && req.method === 'POST'){
        let pdata = '';
        req.on('data',(chunk) => {
            pdata += chunk;
        });
        req.on('end',() => {
            let obj = querystring.parse(pdata);
            let result = scoreData[obj.code];
            let html = template(__dirname + '/view/result.art', {
                chinese: result.chinese,
                math: result.math,
                english: result.english,
                summary: result.summary
            });
            res.end(html);
        });
    }
}).listen(3000,()=>{
    console.log('running....');
});