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
            //[0] 条件判断为假 返回空的jQ对象
            if(!selector)
            {
               return this;
            }
            //[1] 参数是函数
            else if($.isFunction(selector))
            {
               this.ready(selector);
            }
            //[2] 参数是字符串
            else if($.isString(selector))
            {
                //[2-A] 参数是标签

                // <span>我是spanA</span><span>我是spanB</span>
                //<div></div>
                //<a>  <c>
                //总结判断的条件:必须以<开头 && 必须以>结尾 && 长度>=3
                //charAt(index) 获取字符串中指定的字符  "zhangsan"
                //容错性处理:包容用户
                selector = $.trim(selector);
                if($.isHTML(selector))
                {
                    /*
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
                    return this;*/

                    var tempEle = document.createElement("div");
                    tempEle.innerHTML = selector;
                    [].push.apply(this,tempEle.children);
                    return this;
                }
                //[2-B] 参数是选择器
                else
                {
                    //分析:
                    //(001) 根据参数获取所有指定的标签
                    //(002) 把所有获取的标签存储到jQ实例对象中返回
                    //(003) 更新length的值,返回jQ实例对象
                    //"div"
                    //#demoID
                    //.box
                    //document.getElementsByTagName("div");
                    //document.getElementById("#demoID");
                    //document.getElementsByClassName("box");
                    /*
                    //使用系统提供的下面的方法
                    var nodes = document.querySelectorAll(selector);
                    for(var i = 0;i<nodes.length;i++)
                    {
                        this[i] = nodes[i];
                    }
                    this.length = nodes.length;
                    //遍历所有的数据并且把它们依次保存到实例对象中,更新length的值
                    //[].push.apply(this,document.querySelectorAll(selector))
                    */
                    [].push.apply(this,document.querySelectorAll(selector));
                    return this;
                }
            }
            //[3] 数组
            else if($.isArray(selector))
            {
                [].push.apply(this,selector);
                return this;
            }
            //[4]伪数组 ---> 数组
            else if($.isLikeArray(selector))
            {
                /*
                 var arrM = [];
                 for(var i = 0;i<selector.length;i++)
                 {
                 arrM.push(selector[i]);
                 }*/
                var arrM = [].slice.call(selector);
                [].push.apply(this,arrM);
                return this;
            }
            //[5] 其他情况
            else {
                //把参数作为this中key为0对应的value保存起来并返回
                this[0] = selector;
                this.length = 1;
            }
        },
        ready:function (fn) {
            if(document.readyState == "complete") {
                fn();
                return;
            }

            if(document.addEventListener)
            {
                document.addEventListener("DOMContentLoaded",fn)
            }else
            {
                document.attachEvent("onreadystatechange",function () {
                    //console.log(document.readyState);
                    if(document.readyState == "complete")
                    {
                        fn();
                    }
                })
            }
        },
        jquery:"1.1.1",
        selector:"",
        length:0,
        toArray:function () {
            //把当前的实例对象(this)转换为数组返回 伪数组-->数组
            return [].slice.call(this);
        },
        get:function (index) {
            //对参数进行判断,是否传递了参数,如果传递了参数,是是否是数值(正数还是负数)
            //[001] 没有参数 转换为数组
            if(index === undefined)
            {
                 return this.toArray();
            }else
            {
                //[002] 如果参数是数值,继续判断
                if($.isNumber(index))
                {
                    if(index >=0 )
                    {
                        //obj  {0:"div1",1:"div2",2:"div3"}  obj[1]
                        return this[index];
                    }else
                    {
                        //length 4
                        //-1 倒数第一个   索引为3    == -1 + 4
                        //-2 倒数第二个   索引为2    == -2 + 4
                        //-3 倒数第三个   索引为1    == -3 + 4
                        return this[index + this.length];
                    }
                }else
                {
                    return undefined;
                }
            }
        },
        eq:function (index) {
            //[001] 没有参数 返回空jQ对象
            if(index === undefined)
            {
                return $(false);
            }
            //[002] 有参数
            else
            {
                /*
                if($.isNumber(index))
                {
                    if(index >= 0)
                    {
                        return $(this[index]);
                    }else
                    {
                        return  $(this[index + this.length]);
                    }
                }else
                {
                    return undefined;
                }*/
                return $(this.get(index));
            }
        },
        first:function () {
            return this.eq(0);
        },
        last:function () {
            return this.eq(-1);
        },
        push:[].push,
        sort:[].sort,
        splice:[].splice,
        each:function (fn) {
            return $.each(this,fn);
        }
    }

    //003 设置原型对象共享
    jQuery.fn.init.prototype = jQuery.fn;

    //004 工具方法的处理
    jQuery.prototype.extend = jQuery.extend = function (obj) {
        for(var i in obj)
        {
            this[i] = obj[i];
        }
    }

    //常用的工具方法
    jQuery.extend({
        isObject:function (obj) {
            return typeof obj == "object" && obj != null;
        },
        isWindow:function (obj) {
            return obj === window.window;
        },
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
        },
        isArray:function (arr) {
            if(Array.isArray)
            {
                return Array.isArray(arr);
            }else
            {
                return Object.prototype.toString.call(arr) === "[object Array]";
            }
        },
        isLikeArray:function (likeArray) {
            /*
             关键特征
             * (1) 本身是对象不是数组
             * (2) key从0开始依次递增 允许存在其他的key
             * (3) 拥有length属性
             * (4) 拥有length-1键值对
             *
             判断条件
             * (1) 是对象
             * (2) 拥有length属性
             * (3) 拥有length-1属性
             * (4) 不是window
             * */
            return this.isObject(likeArray) && "length" in likeArray && likeArray.length -1 in likeArray && !this.isWindow(likeArray);
        },
        isFunction:function (f) {
            return typeof f == "function";
        },
        isNumber:function (num) {
            return typeof num === "number";
        }
    });

    jQuery.extend({
        each:function (objM,fn) {
            //...遍历第一个参数,调用fn
            //continue  结束本次循环,继续执行下一次循环
            //break     结束整个循环,继续执行循环后面的任务
            var result;
            if($.isArray(objM) || $.isLikeArray(objM))
            {
                for(var i = 0;i<objM.length;i++)
                {
                    //普通函数调用  this-->window
                    //fn(i,objM[i]);
                    //函数上下文调用  this--->objM[i]
                    //第一个参数:绑定fn函数中的this
                    //第二个参数:数组(数组中的元素依次作为实际参数传递给fn)
                    result = fn.apply(objM[i],[i,objM[i]]);
                    if(result == false) break;
                }
            }else if($.isObject(objM))
            {
                for(var key in objM)
                {
                    if(fn.apply(objM[key],[key,objM[key]]) == false) break;
                    //fn(key,objM[key]);
                }
            }
        },
        map:function (objM,fn) {
            //..
            /*
            var result = [];
            for(var i = 0; i<arrM.length; i++){
                var res = fn(arrM[i],i);
                if(res) result.push(res);

            }
            return result;
            */
            var result;
            var arr = [];
            if($.isArray(objM) || $.isLikeArray(objM))
            {
                for(var i = 0;i<objM.length;i++)
                {
                    result = fn(objM[i],i);
                    if(result) arr.push(result);
                }
            }else if($.isObject(objM))
            {
                for(var key in objM)
                {

                    result = fn(objM[key],key);
                    if(result) arr.push(result);
                }
            }
            return arr;
        }
    })

    //操作DOM相关的方法
    jQuery.fn.extend({
        empty:function () {
            //把当前jQ实例对象中选中的所有标签清空(innerHTML == "")
            /*
            for(var i= 0 ;i<this.length;i++)
            {
                this[i].innerHTML = "";
            }*/
            this.each(function () {
                //index = 0,1,2,3,
                //value 当前的每一个标签    ===  this
                this.innerHTML = "";
            })
            return this;
        },
        remove:function () {
            //批量的删除所有选中的标签 (遍历-拿到每一个标签-删除)
            this.each(function () {
                this.parentNode.removeChild(this);
            })

            return this;
        },
        html:function (html) {
            if(arguments.length == 1)
            {
                //批量设置所有标签的节点内容 遍历-拿到每一个标签-设置innerHTML
                this.each(function () {
                    this.innerHTML = html;
                })

                return this;
            }else
            {
                //没有参数:返回第一个元素的节点内容
                return this[0].innerHTML;
            }
        },
        text:function (text) {

            //传递参数:批量的设置所有选中标签的文本内容,返回实例对象
            if(arguments.length ==1)
            {
                this.each(function () {
                    this.innerText = text;
                })
                return this;
            }
            //没有参数:获取所有标签的文本内容拼接在一起最终返回
            else
            {
                var resultString = "";
                this.each(function () {
                    resultString +=  this.innerText;
                })
                return resultString;
            }
        }
    })

    //事件处理相关的方法
    jQuery.fn.extend({
        on:function () {

        },
        one:function () {

        },
        off:function () {

        }
    })

    //005 把jQuery绑定给window全局对象
    window.jQuery =  window.$ = jQuery;

})(window);
