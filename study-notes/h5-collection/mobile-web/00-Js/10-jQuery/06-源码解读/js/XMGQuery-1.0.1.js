/**
 * Created by Administrator on 2018/7/12.
 */

//外层的闭包结构
(function (window,undefined) {

    //001 提供jQuery工厂函数
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector);
    }

    //002 设置jQuery的原型对象
    jQuery.fn = jQuery.prototype = {
        constructor:jQuery,
        init:function (selector) {
            //.....
            //[1] 条件判断为假 返回空的jQ对象
            if(!selector)
            {
               return this;
            }
        }
    }

    //003 设置原型对象共享
    jQuery.fn.init.prototype = jQuery.fn;

    //004 把jQuery绑定给window全局对象
    window.jQuery =  window.$ = jQuery;

})(window);