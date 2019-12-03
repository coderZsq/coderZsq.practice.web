/**
 * Created by Administrator on 2017/7/9.
 */
const cheerio = require('cheerio');
const request = require('request');
//这个包是专门用来设置格式的
const iconv = require('iconv-lite');
//加载页面
//node.js本来默认是utf8,但是我们request请求的时候是gb2312
//所以如果我们需要获取body中文字,我们需要给对应的body设置格式为gb2312


//一般为了扩展性,我们可以把request的第一个参数,设置为一个json
const option = {
    method:'get',
    encoding:null,//表示gb2312,但是一般使用null表示
    url: 'http://tech.qq.com'


}
request(option,function (err,response,body) {

    //设置body的格式为gb2312
    body = iconv.decode(body, 'gb2312');


    // 把body解析成一个jquery对象
    var testB = cheerio.load(body);
    //操控某一个标签
    console.log(testB('#mailTitle').html());


})
