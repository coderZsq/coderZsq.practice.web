(function () {
    /*表示某段时间内重复自动执行某一个操作或者执行一次某一个操作
    * 定时器的分类：一次定时器  多次定时器
    * 一次定时器：只执行一次操作
    * 多次定时器：就是执行多次操作*/
    /*一次定时器：第一个参数表示我们要做的操作，第二个参数表示间隔的时间，一般是毫秒数*/
//    setTimeout(function () {
//        console.log(1);
//    },1000)
    var i = 0;
    var timer =  setInterval(function () {
        i++;
        console.log(i);
        if(i > 10){
            clearInterval(timer);
        }
    },1000)
    /*定时器必须销毁,定时器使用完成后我们必须销毁*/
})();