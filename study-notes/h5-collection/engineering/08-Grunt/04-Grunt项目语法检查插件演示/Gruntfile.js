/**
 * Created by wendingding on 18/3/17.
 */
module.exports = function (grunt) {

    var app = {
        src:"src/",
        dist:"dist/"
    };

    //(1) 项目配置信息
    grunt.initConfig({
        /*对代码进行压缩任务的配置信息*/
        uglify:{
            target:{
                src:app.src + "index.js",
                dest:app.dist + "index.min.js"
            }
        },
        /*对css进行压缩任务的配置信息*/
        cssmin:{
            target:{
                src:app.src + "style/index.css",
                dest:app.dist + "index.min.css"
            }
        },
        /*对js文件进行语法检查任务的配置信息*/
        jshint:{
            target:['Gruntfile.js',app.src + "index.js"],
            options:{
                jshintrc:".jshintrc"
            }
        }
    });

    //(2) 加载对应的插件
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    //(3) 注册任务
    grunt.registerTask("default",["jshint","uglify","cssmin"]);

};