/**
 * Created by Administrator on 2017/7/2.
 */
var express = require('express');
var app = express();

//处理路由,注意如果处理多种路由,一般我们把静态路由放在首位
//因为在实际开发中,我们一般先要设置静态路由,如果放在下面,某些路由就会把它截断
//就无法匹配到静态路由,所以我们实际开发一般把静态路由放在最上面


//设置静态路由
//如果为了具体匹配,我们可以给静态路由设置一个别名路径,当王文这个静态路由的时候,必须设置别名路径
app.use('/jingtai',express.static('./public'));
app.get('/',function (req, res) {
    res.send('1234');

})


app.listen(3000);
