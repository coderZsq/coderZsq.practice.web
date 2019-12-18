/**
 * Created by wendingding on 18/3/18.
 */

module.exports = function (grunt) {

    // 项目配置信息
    grunt.config("uglify",{target:{
            src:"dist/index.js",
            dest:"dist/index.min.js"
        }});

    //安装并且把对应插件加载进来
    grunt.loadNpmTasks("grunt-contrib-uglify");
};
