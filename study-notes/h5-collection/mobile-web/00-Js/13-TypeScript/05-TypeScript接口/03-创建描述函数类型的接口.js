/**1.封装一个网络请求的函数*/
function ajar(url, params, callBack) {
    console.log(url, params);
    callBack('请求成功');
}
/**2.发起一个网络请求*/
var params = { username: 'lili', password: 1234, id: 100010 };
/*实现了CallBack接口的规范（约束）*/
var callback = function (result, error) {
};
ajar('https://www.baidu.com', params, callback);
