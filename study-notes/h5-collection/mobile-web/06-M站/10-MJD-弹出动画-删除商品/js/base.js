window.mjd = {};

mjd.transitionend = function (obj,callback) {
    // 当过渡结束之后有一个事件
    obj.addEventListener('transitionend',callback);

    obj.addEventListener('webkitTransitionEnd',callback);

};

mjd.tap = function (obj,callback) {
    var startTime = 0;
    var endTime = 0;
    // 规定 false代表没有移动 true代表移动了
    var isMove = false;
    obj.addEventListener('touchstart',function (e) {
        // 获取当前时间戳
        startTime = Date.now();
    });

    obj.addEventListener('touchmove',function (e) {
        isMove = true;
    });
    obj.addEventListener('touchend',function (e) {
        endTime = Date.now();
        if (endTime - startTime <= 200 && isMove == false){
            if (callback) callback(e);
        }
        isMove = false;
    })
}
mjd.each = function (list,callback) {
    for (var i = 0; i <list.length; i++) {
        var ele = list[i];
        if (callback) callback(ele,i);
    }
};