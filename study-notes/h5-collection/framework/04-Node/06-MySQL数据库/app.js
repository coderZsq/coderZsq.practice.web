/**
 * Created by Administrator on 2017/7/6.
 */
var db = require('./models/db.js');
// //执行对应的方法
// db.query('select * from employ6',function (err, result) {
//
//     if(err){
//         console.log('查找失败');
//         return;
//     }
//     console.log(result);
// });
db.query('insert into employ6 values(NULL,"100","dsafds","1","dfs",127.0,"dsafds",90)',function (err,result) {
    if(err){
        console.log('插入失败');
        return;
    }
    console.log(result);

})
