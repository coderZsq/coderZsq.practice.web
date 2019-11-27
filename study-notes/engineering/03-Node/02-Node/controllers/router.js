/**
 * Created by Administrator on 2017/6/29.
 */



//需要把函数暴露
//为了方便别人看我们自己的代码,可以提高可读性以及效率

exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;

//实现跳转的方法
//展示index
function showIndex(req,res) {


    //设置响应头
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
    //返回数据
    res.end('this is index page');

}

//展示student
function showStudent(req,res) {


    //设置响应头
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
    //返回数据
    res.end('this is student page');

}
//展示404

function show404(req,res) {


    //设置响应头
    res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'});
    //返回数据
    res.end('404');

}
