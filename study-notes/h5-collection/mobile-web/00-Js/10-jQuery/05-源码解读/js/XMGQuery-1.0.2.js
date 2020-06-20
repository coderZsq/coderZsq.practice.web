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

            //[2] 参数是字符串
            else if(Tool.isString(selector))
            {
                //[2-A] 参数是标签
                // <span>我是spanA</span><span>我是spanB</span>
                //<div></div>
                //<a>  <c>
                //总结判断的条件:必须以<开头 && 必须以>结尾 && 长度>=3
                //charAt(index) 获取字符串中指定的字符  "zhangsan"

                //容错性处理:包容用户
                selector = Tool.trim(selector);
                if(Tool.isHTML(selector))
                {
                    //console.log("参数是标签");
                    //console.log(typeof selector);
                    //把参数中所有的一级标签都保存到jQ实例对象中返回
                    //分析:(001)需要根据字符串获取一级标签
                    //     (002)把所有获取的标签都存到当前jQ实例对象中(this)
                    //     (003)更新length的值
                    var tempEle = document.createElement("div");
                    tempEle.innerHTML = selector;
                    var nodes = tempEle.children;
                    //console.log(tempEle);
                    //console.log(nodes);
                    for(var i = 0;i<nodes.length;i++)
                    {
                        this[i] = nodes[i];
                    }
                    //console.log("this",this);
                    this.length = nodes.length;
                    return this;
                }
                //[2-B] 参数是选择器
                else
                {
                    console.log("其他情况");
                }
            }

            //[3] 数组
        }
    }

    //003 设置原型对象共享
    jQuery.fn.init.prototype = jQuery.fn;

    //004 工具方法的处理
    var Tool = {
        isString:function (str) {
        return typeof str === "string"
    },
        isHTML:function (html) {
        return html.charAt(0) === "<" && html.charAt(html.length -1) ===">" && html.length >=3
    },
        trim:function (text) {
        //检测当前环境是否支持trim方法,如果支持那么就直接使用
        if(text.trim)
        {
            return text.trim();
        }else
        {
            //如果当前环境不支持,那么就自己实现
            //第一个参数:要替换的字符是什么 空格
            //第二个参数:要替换成什么东西   空
            //注意点:只会替换一次
            //return text.replace(" ","")

            //第一个参数:正则表达式(匹配)
            //目前:字符串前面和后面的一个或多个空格
            //\s 空格
            //\s+ N个空格
            //^\s+ 开头的N个空格
            //\s+$ 结尾的N个空格
            //g 表示连续处理
            return text.replace(/^\s+|\s+$/g,"")
        }
    }
    }

    //005 把jQuery绑定给window全局对象
    window.jQuery =  window.$ = jQuery;

})(window);