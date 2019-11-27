/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
//导入一个url模块
//我们的请求的地址起始可以看成多个部分
//例如 host ,port,pathname(路径,除了host以及端口),query(表示请求的参数)
//我们在实际开发中,很有可能使用到url中的某一个部分,所以url这个包就可以把对应的url拆分成不同的部分
var url = require('url');

//当接收请求后,我们可以使用url对请求的地址作出处理
var server = http.createServer(function (req,res) {

    //使用url对对应的请求的地址作出处理,通过parse方法可以把请求的地址转化成一个对象,这个对象中包含了url中的各个部分,我们可以利用他取出对应的值

    /*/favicon.ico:当在有请求的时候,大多数情况系统会默认有一个图片请求
    * 这个图片请求的路径是/favicon.ico,所以一般在我们请求的时候
    * 我们需要把图片路径去掉,当对应的url是这个路径的时候,我们就直接结束程序*/

    //pathname:表示除了ip地址以及端口后面的路径,但是不包含参数
   var pathName = url.parse(req.url).pathname;

   //query:获取的是url的参数部分,但是是一个字符串,如果我们想要具体的某个参数的值
    //我们需要处理字符串,但是处理字符串不好处理,
    //所以我们最好把字符串转化成对象,注意,我们需要在处理对应的url的时候,就可以设置一个参数,如果设置了这个参数为true,name获取到的query就是一个对象





   var queryS = url.parse(req.url).query;
   console.log('pathname:'+pathName);
   console.log('queryS:'+queryS);
   res.end('finish');

});
server.listen(3000,'127.0.0.1');


