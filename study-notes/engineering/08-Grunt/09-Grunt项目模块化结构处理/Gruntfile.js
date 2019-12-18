/**
 * Created by wendingding on 18/3/18.
 */

/*
* 常用的插件:
* concat  合并代码
* uglify  压缩代码
* cssmin  压缩代码
* jshint  对js语法进行检查的插件
*
*
* 合并代码--> 语法检查 -->压缩
* */
module.exports = function (grunt) {
    // 项目配置信息
    grunt.config.init({
        pkg:grunt.file.readJSON("package.json"),
        cssmin:{
            target:{
                src:"src/index.css",
                dest:"dist/index.min.css"
            }
        },
        jshint:{
            target:['Gruntfile.js',"dist/index.js"],
            options:{
                jshintrc:".jshintrc"
            }
        },
        watch:{
            target:{
                files:["src/*.js","src/*.css"],
                tasks:["concat","jshint","uglify","cssmin"]
            }
        }
    });


    //表示从target_task文件目录下面加载Task
    grunt.loadTasks("target_task");

    //安装并且把对应插件加载进来
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //注册具体的任务
    grunt.registerTask("default",["concat","jshint","uglify","cssmin","watch"])

};