/**
 * Created by Administrator on 2018/7/18.
 */
$(function () {
    /*****001 实现吸顶操作*******/
    /*
    * 实现思路
    * (1) 监听页面的滚动,获取滚动条距离窗口顶部的位移 top
    * (2) 获取比较的这段位移的长度                  nav_top
    * (3) 检查 top > nav_top 显示顶部 + 显示logo,否则就恢复
    * */
    //获取nav标签距离窗口顶部的相对位移
    var nav_top = $(".nav").offset().top;
    //监听页面的滚动
    $(window).on("scroll",function () {
        //先获取滚动条距离顶部的位移
        var top  = $(window).scrollTop();
        //检查比较大小
        if(top > nav_top)
        {
            //显示顶部效果
            $(".nav").css({
                "position":"fixed",
                "top":0,
                "box-shadow":"0px 1px 3px rgba(0,0,0,0.3)"
            })

            //logo图片显示出来
            $(".left img").css({
                opacity:1
            })

            //显示返回顶部标签
            $(".back_top").stop().slideDown();
        }else
        {
            $(".nav").css({
                "position":"absolute",
                "top":"100px",
                "box-shadow":"none"
            })

            $(".left img").css({
                opacity:0
            })

            $(".back_top").stop().slideUp();
        }
    })


    /*****002 实现返回顶部操作*******/
    /*
    * 实现思路
    * (1) 在页面中添加对应的标签,设置样式(右下角)
    * (2) 监听页面的滚动,当滚动到一定距离的时候显示或者是隐藏
    * (3) 给标签添加点击事件,事件触发的时候,回到顶部
    * */
    $(".back_top").click(function () {
        $("html").stop().animate({
            "scrollTop":0
        })
    })


    /*****003 实现添加操作*******/
    /*
    * 实现思路
    * (1) 给添加标签注册点击事件,当点击事件发生后..
    * (2) 获取页面中文本输入框的内容
    * (3) 对输入框的内容进行处理(检查是否有内容,清空前后的空格)
    * (4) 根据文本内容来创建对应的标签(li),插入到页面中显示出来
    * (5) 清空文本输入框中的内容
    * (6) 设置让新添加的任务显示动画效果
    *
    *
    * 数据持久化存储 -- 本地存储
    * (1) 当页面加载的时候,应该读取本地存储的数据信息,根据这个数据来生成UI
    * (2) 当点击添加按钮的时候,把数据保存到数组中,并且同步保存到本地存储中
    * */
    var itemArray = store.get("data") || [];
    function loadView() {
        $(".task").empty();
            //["01-起床","02-吃早茶","03-学习","03-学习"]
            for (var i = 0; i < itemArray.length; i++) {
                var item = itemArray[i];
                if(item == undefined) continue;
                var tempHTML =
                    '<li index='+i+'>'+
                    '<input type="checkbox" class="checkboxClass">'+
                    '<span class="title">'+item+'</span>'+
                    '<span class="detail">详情</span>'+
                    '<span class="del">删除</span>'+
                    '</li>';
                $(".task").prepend($(tempHTML));
            }
    }
    loadView();
    $("#submitID").on("click",function () {
        var text = $("#textID").val();
        text = $.trim(text);
        if(text.length === 0)
        {
            throw "请输入正确的内容!"
        }

        //[01] 更新数据
        itemArray.push(text);
        store.set("data",itemArray);

        //[02] 更新UI
        loadView();
        $("#textID").val("");
        $(".task >li").first().stop().hide().slideDown(800);
    })


    /*****004 实现删除操作*******/
    /*
    * 实现思路
    * (1) 通过事件委托的方式给页面中对应的标签添加点击事件
    * (2) 事件发生后
    *     001 更新UI界面 (把对应的li标签删除 设置动画效果)
    *     002 同步保存数据
    *     核心问题: 当点击对应标签的时候,我们可以简单的把标签删除,但是需要找到数组中对应的元素来删除来同步数据,但是似乎找不到对应的关系
    *     尝试:
    *     (1) 索引对应 X
    *     (2) 获取标签任务的名称然后去数组中查找删除(新的问题-任务名称有可能是相同的)
    *     方案:
    * */
    $(".task").on("click",".del",function () {
        //001 更新UI
        $(this).parent().slideUp(1000,function () {
            $(this).remove();
        });

        //002 删除数据
        //先删除itemArray数组中对应的元素,然后重新保存
        //console.log(itemArray);
        //console.log($(this).parent().index());

        //先找到需要删除的是数组中的哪个元素
        var index = $(this).parent().attr("index");
        //执行删除操作
        delete itemArray[index];
        store.set("data",itemArray);
    })

})