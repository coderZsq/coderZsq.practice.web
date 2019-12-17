/**
 * Created by Administrator on 2017/6/29.
 */
var ejs = require('ejs');

//1创建一个模板,一般是一个字符串
/*<%= a %>:表示模板的语法,只有在模板中有变化的东西获取页面无法识别东西我们就用<%%>把它包起来,注意下面的语法中=和前面不要有空格*/
var str = '好高兴啊，今天我买了一个iphone<%= a %>s';

//2.设置数据,一般是一个json数据
var dataDict = {a:6};

//3.使用数据渲染模板
 var html = ejs.render(str,dataDict);

 console.log(html);
