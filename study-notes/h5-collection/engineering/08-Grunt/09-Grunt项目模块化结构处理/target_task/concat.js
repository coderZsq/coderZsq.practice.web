/**
 * Created by wendingding on 18/3/18.
 */

module.exports = function (grunt) {

    // 项目配置信息
    grunt.config("concat", {
            options:{
                stripBanners:true,
                banner:'/*项目名称--<%=pkg.name%>--项目版本--<%=pkg.version%>--项目的作者--<%=pkg.author%>' +
                '--更新时间<%=grunt.template.today("yyyy-mm-dd")%>*/'
            },
            target:{
                src:["src/demo1.js","src/demo2.js"],
                dest:'dist/index.js'
            }
        });

    //安装并且把对应插件加载进来
    grunt.loadNpmTasks("grunt-contrib-concat");
};