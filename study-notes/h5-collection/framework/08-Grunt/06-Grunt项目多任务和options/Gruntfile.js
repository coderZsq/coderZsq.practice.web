module.exports = function (grunt) {

    /*
    * 第一个参数:Task的名称
    * 第二个参数:任务的描述信息
    * */
    grunt.initConfig({
       "hi": {
           /*对整个任务中所有target的配置项 全局*/
           options:{
               "outPut":"array"
           },
           targetA:{
               arrM:["targetA_1","targetA_2","targetA_3"]
           },
           targetB:{
               options:{
                   "outPut":"json"
               },
               arrM:["targetB_1","targetB_2","targetB_3"]
           },
           targetC:{
               arrM:["targetC_1","targetC_2","targetC_3"]
           }
       }
    });


    grunt.registerMultiTask("hi","任务的描述次信息:这是一个打招呼的任务",function () {
        //console.log(this);
        console.log("任务当前执行的target: "+this.target);
        console.log("任务当前执行的target对应的数据: \n");

        var objT = this.options();
        if (objT.outPut == "array")
        {
            console.log("输出数组:\n");
            console.log(this.data.arrM);
        }else if (objT.outPut == "json")
        {
            console.log("输出JSON数据:\n");
            console.log(JSON.stringify(this.data.arrM));
        }

        //console.log("hi 文顶顶");

    });


    //(1) 相关的概念 Task(任务-hi) | target(目标)
    //(2) 任务的配置:任务中可以配置一个或者是多个目标  调用config
    //(3) 复合任务的执行(多任务-多target)
    //   001 grunt TaskName 把当前Task下面所有的目标操作都执行一遍
    //   002 grunt TaskName:targetName 执行当前Task下面的某一个指定的目标

    grunt.registerTask("default",["hi"]);

};