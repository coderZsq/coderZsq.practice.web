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
        concat:{
            options:{
                stripBanners:true,
                banner:'/*项目名称--<%=pkg.name%>--项目版本--<%=pkg.version%>--项目的作者--<%=pkg.author%>' +
                '--更新时间<%=grunt.template.today("yyyy-mm-dd")%>*/'
            },
            target:{
                src:["src/demo1.js","src/demo2.js"],
                dest:'dist/index.js'
            }
        },
        uglify:{
            target:{
                src:"dist/index.js",
                dest:"dist/index.min.js"
            }
        },
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


    //安装并且把对应插件加载进来
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //注册具体的任务
    grunt.registerTask("default",["concat","jshint","uglify","cssmin","watch"])

};