/**
 * Created by Administrator on 2017/7/9.
 */

var gm = require('gm');
var fs = require('fs');
//利用对应crop对图片进行裁剪,然后使用
//write方法把对应的裁剪后的图片显示出来

gm("./sogo.jpg")
    .resize(100,100)
    .write("./sogo1.jpg",function (err) {
        if (err){
            console.log(err);
        }
        console.log('设置成功');
    })
