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
            let html = template(path.join(__dirname + 'view','result.art'), result);
            res.end(html);
        });
    } else if (req.url.startsWith('/all') && req.method === 'GET') {
        let arr = [];
        for (let key in scoreData) {
            if (scoreData.hasOwnProperty(key)) {
                arr.push(scoreData[key]);
            }
        }
        let content = template(path.join(__dirname,'view','list.art'),{
            list : arr
        });
        res.end(content);
    }
}).listen(3000,()=>{
    console.log('running....');
});