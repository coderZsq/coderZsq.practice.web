module.exports = function (grunt) {

    //注册两个自定义任务
    /*
    * 第一个参数:Task的名称
    * 第二个参数:任务的描述信息
    * */
    grunt.registerTask("hi","任务的描述次信息:这是一个打招呼的任务",function () {
        //console.log("hi 文顶顶");

        //log相关api:支持多种形式的日志输出
        grunt.log.ok();                               //没有传递参数则输出绿色字体的OK
        grunt.log.ok("hi 文顶顶");
        grunt.log.ok("hi 文顶顶","嘿嘿嘿嘿");                     //以>> msg的格式输出消息
        grunt.log.ok(["hi 文顶顶","你好啊 杜拉拉"]);     //以>> msg..的格式输出多个消息
        grunt.log.error();                            //没有传递参数则表示输出红色字体的ERROR
        grunt.log.error(["hi 文顶顶","你好啊 杜拉拉"]);
    });

    grunt.registerTask("hello","任务的描述次信息:这是一个简单问候任务",function () {

        //表明当前的任务在执行的时候需要依赖于另外一个任务:先执行hi这个任务,才能执行hello这个任务
        grunt.task.requires("hi");
        console.log("Nice to meet you!");
    });

    //grunt.registerTask("default",["hi","hello"]);
};