/**
 * Created by Administrator on 2017/6/29.
 */

 var htttp = require('http');

 //这个包可以把一个符合条件的字符串直接转化成对象
 var querystring = require('querystring');

 var server = htttp.createServer(function (req,res) {
     //判断是否是post请求
     if(req.url== '/dopost' && req.method.toLowerCase() =='post'){

         //处理提交的数据
         //如果数据比较大,就会阻塞当前程序
         //那么node.js提供这样一种机制
         //把提交的数据拆分成一小段,每次使用回调获取对应的每一段数据
         //如果我们相拥获取所有的数据,只需要设置一个字符串,每次使用这个字符串把这些数据
         //拼接起来
         //需要监听数据的变化,获取每次回调回来的数据
         var allData = '';
         req.addListener('data',function (chunk) {
             //chunk:表示每一小段数据
             console.log('1234');

             allData +=chunk;


         })
         //添加一个数据的完成
         req.addListener('end',function (err) {
             // console.log(allData);
            var dataObj = querystring.parse(allData);
            console.log(dataObj);

             res.end('finish');

         })


     }


 });
 server.listen(3000,'127.0.0.1');