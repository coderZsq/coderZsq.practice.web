/**
 * Created by Administrator on 2017/7/2.
 */

var  express  = require('express');
var app = express();


//在express中路由设置的时候可以不区分大小写
app.get('/AAa',function (req,res) {
    res.send('finish');

})
app.listen(3000);