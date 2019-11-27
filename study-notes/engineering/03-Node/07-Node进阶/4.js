/**
 * Created by Administrator on 2017/7/9.
 */
var md5 = require('md5');
var sha1 = require('sha1');
//设置一个原始的数据
var orighinalData = '123435das';

//设置加密
console.log(md5(orighinalData));
console.log(sha1(orighinalData));
//当有一些敏感的信息我们就需要加密,例如 用户名密码,以及一些账务信息,
//
