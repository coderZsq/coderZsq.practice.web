/**
 * Created by wendingding on 18/3/18.
 */

module.exports = function (grunt) {

    //知识点说明: 模板配置
    //(1) 自定义任务
    grunt.config.init({
        pkg:grunt.file.readJSON("package.json"),
        demo :{
           banner:"<%=pkg.name%> -- <%=pkg.version%>"
       },
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
        }
    });
    grunt.registerMultiTask("demo",function () {
        console.log("执行demo任务");
        console.log(this.data);

        //表示调用config方法来读取demo这个task里面的banner属性
        console.log(grunt.config("demo.banner"));
    });

    //(2) 插件任务  concat插件合并js文件
    //001 先把插件下载到本地  npm install grunt-contrib-concat --save-dev
    //002 在Gruntflie文件中对插件进行配置
    //003 加载对应的插件
    grunt.loadNpmTasks("grunt-contrib-concat");


    //终端在执行任务的时候可以给Task传递参数
    //需求:命令行传递数据给Task,接收数据之后,根据该数据来执行循环操作
    //传递参数:grunt taskName --argName=value
    grunt.registerTask("test",function () {

        var count = grunt.option("index");
        if (count)
        {
            console.log("接收到参数" + count);
            for (var i = 0; i < count; i++) {
                console.log(i);
            }
        }else
        {
            console.log("没有传递参数");
        }
    })
};