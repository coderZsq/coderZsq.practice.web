/**
 * Created by wendingding on 18/3/17.
 */

//包装函数
module.exports = function (grunt) {

    //(1)自定义任务设置和执行
    //向控制台输出:hello 文顶顶
    //第一个参数:任务的名称(Task)
    //第二个参数:具体的任务内容
    grunt.registerTask("hello",function () {
        grunt.log.writeln("hello 文顶顶");
    });

    //命令行执行任务的格式:grunt 任务的名称
    grunt.registerTask("football",function () {
        grunt.log.writeln("皇家马德里: how are you");
        grunt.log.writeln("尤文图斯: how old are you");
    });


    //(2) 插件的处理
    //使用步骤:
    //[1] 需要先把对应的插件下载和安装到本地的项目中
    //    npm install grunt-contrib-concat --save-dev
    //[2] 对插件(任务)进行配置
    //    grunt.initConfig
    //[3] 通过代码来加载对应的插件
    //[4] grunt.registerTask注册任务
    //[5] 通过grunt命令执行任务
    grunt.initConfig({
        "concat":{
            "dist":{
                "src":["src/demo_one.js","src/demo_two.js","src/demo_three.js"],
                "dest":"dist/index.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.registerTask("default",["hello","football","concat"]);
    //grunt.registerTask("abc_concat",["concat"]);

};