/**
 * Created by Administrator on 2017/7/2.
 */

var fs = require('fs');
//读取文件,为了方便外界使用,我们最好把读取文件的过程以及获取数据放在一个函数中
//然后把这个函数传递出去
// exports.getAllalbum= function () {
//     fs.readdir('./uploads',function (err,files) {
//         //设置一个数据用来记录符合条件的文件夹
//         var fileNames = [];
//
//         //遍历files
//         //
//         (function iterator(i) {
//
//             //设置终止
//             if(i == files.length){
//                 console.log(fileNames);
//
//                 return fileNames;
//             }
//
//             var fileName = files[i];
//
//             //检测対应的路径是否是一个文件夹
//             fs.stat('./uploads/'+fileName,function (err,stats) {
//                 //判断
//                 if(stats.isDirectory()){
//
//                     fileNames.push(fileName);
//
//
//                 }
//                 //让对应的i值加一
//                 iterator(i+1);
//
//             })
//
//         })(0)
//
//
//
//     })
//
//
// }

//callBack就是表示回调
exports.getAllalbum = function (callBack) {

    fs.readdir('./uploads',function (err,files) {

        //实现错误处理
        if(err){
            callBack(err,null);
            return;
        }
        // if(err){
        //     throw  err;
        //     return;
        // }
        //设置一个数据用来记录符合条件的文件夹
        var fileNames = [];

        //遍历files
        //
        (function iterator(i) {

            //设置终止
            if(i == files.length){
                console.log(fileNames);

                //执行回调,组好有两个参数,一个表示err,一个表示数据
                callBack(err,fileNames);

                return ;
            }

            var fileName = files[i];

            //检测対应的路径是否是一个文件夹
            fs.stat('./uploads/'+fileName,function (err,stats) {
                //判断
                if(stats.isDirectory()){

                    fileNames.push(fileName);


                }
                //让对应的i值加一
                iterator(i+1);

            })

        })(0)



    })



}

//使用这个方法来获取某一个相册目录下的所有的文件
//这个方法需要两个参数,第一个参数表示相册的名称
//第一个参数表示回调

exports.getAllImagesByName = function (albumName,callBack) {
    fs.readdir('./uploads/'+albumName,function (err,files) {

        if(err){
            callBack(err,null);
            return;
        }
        var images = [];
        //遍历
        (function iterator(i) {


            //设置终止条件
            if(i == files.length){
                console.log(images);
                callBack(err,images);
                return;
            }

            //判断当前的目录是否是一个文件
            var fileName = files[i];
            fs.stat('./uploads/'+albumName +'/'+fileName,function (err,stats) {

                //检测是否是一个文件
                if(stats.isFile()){
                    images.push(fileName);

                }
                iterator(i+1);

            })

        })(0)


    })


}