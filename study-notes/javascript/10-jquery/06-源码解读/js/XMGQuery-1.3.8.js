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
        isjQuery:true,
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
        },
        getStyle:function (oDOM,key) {
            if(window.getComputedStyle)
            {
                return window.getComputedStyle(oDOM)[key];
            }else
            {
                return oDOM.currentStyle[key];
            }
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
        },
        attr:function () {
            //总结:
            //(1) 没有参数 报错
            //(2) 1个参数
            //      A 字符串  查询
            //      B 对象    批量设置
            //(3) 2个参数     设置
            if(arguments.length == 0 || (!$.isString(arguments[0]) && !$.isObject(arguments[0])))
            {
                throw "参数错误!";
            }else if(arguments.length ==1)
            {
                var param = arguments[0];
                if($.isString(param))
                {
                    //获取所有标签中第一个标签对应的属性节点值返回
                    return this[0].getAttribute(param);
                }else if($.isObject(param))
                {
                    //遍历jQuery实例对象
                    this.each(function () {
                        //this -- 当前的每一个标签
                       var self = this;
                       $.each(param,function (key,value) {
                           //key  title des
                           //value 我是标题T 描写信息
                           //this --- 当前对象中的value值
                           self.setAttribute(key,value);
                       })
                    })
                    return this;
                }
            }else if(arguments.length ==2)
            {
                var key = arguments[0];
                var value = arguments[1];
                //遍历实例对象
                this.each(function () {
                    this.setAttribute(key,value);
                })
                return this;
            }
        },
        removeAttr:function (key) {
            if(arguments.length == 1)
            {
             this.each(function () {
                 this.removeAttribute(key);
             })
            }
            return this;
        },
        prop:function () {
            //[001] 没有参数 抛出异常
            if(arguments.length == 0)
            {
                throw "请检查参数是否正确!"
            }
            //[002] 有1个参数
            else if(arguments.length == 1)
            {
            //[002 - 1] 参数是字符串  查询
                var param = arguments[0];
                if($.isString(param))
                {
                    //查询获取第一个标签对应属性的值返回
                    //var obj = {name:"zs"};  obj["name"]

                   return this.get(0)[param];
                }
            //[002 - 2] 参数是对象    批量设置多个属性
                else if($.isObject(param))
                {
                    //param {"a1": "我是新的a1","a2":"我是a2"}
                    //this  jQ(....)
                    //批量设置所有选中标签多个属性
                    //遍历当前的实例对象,拿到每一个标签
                    //遍历包含多个属性对象,给每个标签设置多个键值对
                    this.each(function () {
                        //this --> 当前的DOM标
                        var self = this;
                        $.each(param,function (key,value) {
                            self[key] = value;
                        })
                    })
                }else
                {
                    return undefined;
                }
            }
            //[003] 有2个参数
            else if(arguments.length == 2)
            {
                var key = arguments[0];
                var value = arguments[1];
                //遍历jQ实例对象,设置属性
                this.each(function () {
                    //this -- value --DOM
                    this[key] = value;
                })
            }

            return this;

        },
        removeProp:function (key) {
            if(key)
            {
                //遍历jQ实例对象,删除对应的属性
                this.each(function () {
                    //this -- DOM标签
                    //delete obj["name"];
                    delete this[key];
                })
            }
            return this;
        },
        val:function (value) {
            //[001] 没有参数
            if(arguments.length == 0)
            {
                //获取所有标签中第一个标签的value属性值返回
                return this.get(0)["value"];
            }
            //[002] 传递了一个参数
            else if(arguments.length ==1)
            {
                //遍历jQ实例对象,设置所有标签的value属性为指定的值
                this.each(function () {
                    this["value"] = value;
                })
            }

            return this;
        }
    })

    //插入相关的方法
    jQuery.fn.extend({
        appendTo:function (jQ) {
            //....把选中的所有标签都插入到指定标签内容的后面
            //console.log($("li").appendTo($("div")));
            //作用:把所有的li标签都插入到div标签内容的后面
            //返回值:把操作的所有li标签都保存到jQ实例对象中返回
            //$("li")  === this
            //$("div")  === jQ

            //接受到的参数jQ,有可能是实例对象,也有可能是字符串
            jQ = $(jQ);
            //001 先获取当前实例对象(this)中所有的标签和jQ参数中所有的标签

            /*
             for(var j = 0;j<oDivs.length;j++)
             {
                var oDiv = oDivs[j];
                 for(var i = 0;i<olis.length;i++)
                 {
                 if(j == 0)
                 {
                 var oLi = olis[i];
                 }else
                 {
                 var oLi = olis[i].cloneNode(true);
                 }
                 oDiv.appendChild(oLi);
             }
             }
            * */
            var that = this;
            var arrM = [];
            $.each(jQ,function (index,DOM) {
                //拿到当前的每一个标签
                //this -- DOM
                $.each(that,function (i,ele) {
                    if(index ==0)
                    {
                        //this -- ele
                        DOM.appendChild(this);
                        arrM.push(this);
                    }else
                    {
                        DOM.appendChild(this.cloneNode(true));
                        arrM.push(this.cloneNode(true));
                    }
                })
            });
            return $(arrM);
        },
        append:function (jQ) {
            //jQ可能是jQ实例对象,也可能是其他类型的数据(字符串 123)
            if (jQ.isjQuery == true) {
                //$("li").appendTo($("div"))
                //$("div").append($("li"))
                //$("div") == this   $("li") == jQ
                jQ.appendTo(this);
            } else
            {
                //把参数拼接在每个选中标签内容的后面  innerHTML
                //遍历当前的实例对象
                this.each(function () {
                    this.innerHTML += jQ;
                })
            }
            return this;
        },
        prependTo:function (jQ) {
            //作用:把选中的所有标签都插入到指定标签内容的前面
            //返回值:把操作的所有li标签都保存到jQ实例对象中返回
            jQ = $(jQ);
            var that = this;
            var arrM = [];
            $.each(jQ,function (index,DOM) {
                //拿到当前的每一个标签
                //this -- DOM
                var first = DOM.firstChild;  //设置让插入操作参考的标签固定
                $.each(that,function (i,ele) {
                    if(index ==0)
                    {
                        //this -- ele
                        //把this标签插入到DOM标签中first节点的前面
                        DOM.insertBefore(this,first);
                        arrM.push(this);
                    }else
                    {
                        DOM.insertBefore(this.cloneNode(true),first);
                        arrM.push(this.cloneNode(true));
                    }
                })
            });

            //把数组包装成jQ实例对象返回
            return $(arrM);
        },
        prepend:function (jQ) {
            //jQ可能是jQ实例对象,也可能是其他类型的数据(字符串 123)
            if (jQ.isjQuery == true) {
                //$("li").appendTo($("div"))
                //$("div").append($("li"))
                //$("div") == this   $("li") == jQ
                jQ.prependTo(this);
            } else
            {
                //把参数拼接在每个选中标签内容的后面  innerHTML
                //遍历当前的实例对象
                this.each(function () {
                    this.innerHTML = jQ + this.innerHTML;
                })
            }
            return this;
        },
    })

    //样式操作相关的方法
    jQuery.fn.extend({
        hasClass:function (classT) {

            /*
            //(1) 没有参数
            if(classT == undefined)
            {
                return flag;
            }
            //(2) 存在参数
            else {
                classT = " " + classT + " ";
                //遍历当前的实例对象,获取每一个标签,获取该标签身上所有的样式和参数进行匹配
                this.each(function () {
                    //先获取当前标签的 " className ex:box1 class1 bbx class2 "
                    var classNameString = " " + this.className + " ";
                    //使用参数和获取的样式字符串进行匹配
                    //indexOf方法返回一个数值(-1或者是其他值)
                    if(classNameString.indexOf(classT) != -1)
                    {
                        //如果找到样式:(1) 停止循环 (2) 返回true
                        flag = true;
                        return false;  //(1)
                    }
                })

                return flag;
            }*/
            var flag = false;
            if(arguments.length == 1)
            {
                classT = " " + classT + " ";
                //遍历当前的实例对象,获取每一个标签,获取该标签身上所有的样式和参数进行匹配
                this.each(function () {
                    //先获取当前标签的 " className ex:box1 class1 bbx class2 "
                    var classNameString = " " + this.className + " ";
                    //使用参数和获取的样式字符串进行匹配
                    //indexOf方法返回一个数值(-1或者是其他值)
                    if(classNameString.indexOf(classT) != -1)
                    {
                        //如果找到样式:(1) 停止循环 (2) 返回true
                        flag = true;
                        return false;  //(1)
                    }
                })
            }
            return flag;
        },
        addClass:function (classT) {
            //[001] 先把参数切割成数组
            var arrM = classT.split(" ");
            //[002] 遍历所有选中的标签
            this.each(function () {
                //[003] 遍历数组,拿到当前标签检查当前标签中是否存在指定的样式
                //this --- div
                var self = this;
                $.each(arrM,function (index,ele) {
                    //index..1.2.3..
                    //ele "class2" "box"  == this
                    if(!$(self).hasClass(this))
                    {
                        //如果当前标签中没有指定的样式,那么就设置上去
                        self.className = $.trim(self.className + " " + this);
                    }
                })
            })
            return this;
        },
        removeClass:function (classT) {

            //分析实现思路
            //[001] 先把参数切割成数组  ["class1","class2"]
            //[002] 遍历所有选中的标签,拿到当前的标签处理样式
            //[003] 拿到当前标签的className "class2 class1"
            //[004] 遍历数组,获取当前的元素 "class1"
            //[005] 检测当前标签(div1)中是否拥有class1这个样式,如果有那么就修改classsName的值(删掉)
            var arrM = classT.split(" ");
            console.log(arrM);
            this.each(function () {
                //this -- 当前的标签  div
                var self = this;
                $.each(arrM,function (index,ele) {
                    //this -- 当前的元素 --ele  "class1"
                    if($(self).hasClass(this))
                    {
                        //修改当前标签的样式(className属性)
                        //"class2 class1"  ==> "box class2"
                        var tempStr = " " +self.className +" ";
                        self.className = $.trim(tempStr.replace(" " + ele + " "," "));
                    }

                })

            })
            return this;
        },
        toggleClass:function (classT) {
            //[001] 对参数进行切割,切割成数组
            //[002] 遍历选中的标签,遍历数组
            //[003] 拿到数组中当前的元素,检测当前标签中是否存在,如果存在就删掉,否则就添加
            var arrM = classT.split(" ");
            this.each(function () {
                var self = this;
                $.each(arrM,function () {
                   if($(self).hasClass(this)){
                       $(self).removeClass(this);
                   }else
                   {
                       $(self).addClass(this);
                   }
                })
            })
            return this;
        },
        css:function () {
            if(arguments.length == 0 || (!$.isString(arguments[0]) && !$.isObject(arguments[0])))
            {
                throw "参数错误!";
            }else if(arguments.length ==1)
            {
                var param = arguments[0];
                if($.isString(param))
                {
                    //读取第一个标签对应的样式值返回
                   return $.getStyle(this.get(0),param);
                }else if($.isObject(param))
                {
                    //批量设置所有选中标签的多个样式
                    //jQ.css({"width": "400px","background":"yellow"})
                    this.each(function () {
                        var self = this;
                        $.each(param,function (key,value) {
                            self.style[key] = value;
                        })
                    })
                }
            }else if(arguments.length ==2)
            {
                var key = arguments[0];
                var value = arguments[1];
                //设置所有选中标签的样式
                //jQ.css("width", "200px"));
                this.each(function () {
                    this.style[key] = value;
                })

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
