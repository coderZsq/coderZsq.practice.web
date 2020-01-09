/**
 * Created by wendingding on 18/3/17.
 */
module.exports = function (grunt) {

    var app = {
        src:"src/",
        dist:"dist/"
    };

    //(1) 项目配置信息
    //grunt.config.init();
    grunt.initConfig({
        "uglify":{
            target:{
                src:app.src + "index.js",
                dest:app.dist + "index.min.js"
            }
        },
        "cssmin":{
            target:{
                src:app.src + "style/index.css",
                dest:app.dist + "index.min.css"
            }
        }
    });

    //(2) 加载对应的插件
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    //(3) 注册任务
    grunt.registerTask("default",["uglify","cssmin"]);

};