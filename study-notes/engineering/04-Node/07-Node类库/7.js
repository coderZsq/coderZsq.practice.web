/**
 * Created by Administrator on 2017/7/9.
 */
 var reqTest = require('request');
 //设置请求的页面
//request只是对页面中的内容进行获取,但是无法对具体标签进行解析,所以我要使用别的包

reqTest('https://baidu.com',function (err,response,body) {

    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print t
    
})

