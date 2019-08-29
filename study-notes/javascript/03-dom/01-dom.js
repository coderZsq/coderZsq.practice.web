/*
* dom: 本质就是一套用于访问html以及xml的接口, 不能直接操控css, 但是可以间接操控css
* dom就是对标签的增删改查
* 一般所有的标签我们会形成一颗dom树，每一dom节点对应一个渲染器，然后渲染器用来渲染每一个dom节点
* 如果该节点的display== none 一般这个渲染器不会创建渲染器会形成一颗渲染树
* 回流：就是指对应的渲染树的对应的结构或者位置如果发生变化，一般是结构性或者是布局性变化就会回流
* 例如：节点的新增或者删除 标签的位置显示内容变化
* 重绘：如果只是相关显示发生变化就会有重绘：一般例如背景颜色发生变化变化就会有重绘
* 回流一定会有重绘
* 我们开发中一般需要避免回流或者重绘
* */

/*查找操作*/
/*1.id来找：id使用于所有浏览器*/
(function () {
    var div1 = document.getElementById('demo');
    console.log(div1);
})();

/*2.tagName查找:兼容所有的浏览器*/
(function () {
    var divs = document.getElementsByTagName('div')[0];
    console.log(divs);
})();

/*3.使用class查找：不兼容ie8以及以下的浏览器*/
(function () {
    var divTest = document.getElementsByClassName('demo')
    console.log(divTest);
})();

/*4.querySelector:可以根据css样式中的选择器来查找元素, 这个方法不兼容ie7以及以下,这个方法不是动态的*/
(function () {
   var divQ = document.querySelector('div > span');
   console.log(divQ);
})();

(function () {
    var divs = document.getElementsByTagName('div');
    var demo = document.getElementsByClassName('demo')[0];
    demo.remove();
    console.log(divs);
})();

// (function () {
//     var divs = document.querySelectorAll('div');
//     var demo = document.querySelector('.demo');
//     demo.remove();
//     console.log(divs);
// })();

(function () {
    /*操作的是整体的dom节点, 不是元素节点*/
    var demo = document.getElementById('demo');
    /*获取子节点
    * 节点是分类型的：元素节点 属性节点 文本节点 注释节点
    * document特殊节点*/
    /*1.获取所有的节点，不是只有元素节点 childNodes*/
    console.log(demo.childNodes);
    /*2.获取第一个子节点 firstChild*/
    console.log(demo.firstChild);
    /*3.获取最后一个子节点lastChild*/
    console.log(demo.lastChild);
    /*4获取兄弟节点*/
    console.log(demo.nextSibling);
})();

(function () {
    /*操控元素节点*/
    /*获取所有的元素子节点
    * children:这个属性适用所有的浏览器，其他的直接元素节点的属性或者方法一般不兼容ie8
    * 以及ie8以下的浏览器*/
    console.log(demo.children);
    /*获取第一个元素子节点*/
    console.log(demo.firstElementChild);
    console.log(demo.lastElementChild);
    console.log(demo.nextElementSibling);
    /*hasChildNodes:判断某一个节点是否有子节点*/
    console.log(demo.hasChildNodes());
})();

/*1.nodeName
  2.nodeType
    元素节点类型为 1
    属性节点类型为 2
    文本节点类型为 3
    docuement类型为9
  3.attributes*/

(function () {
    /*创建多种类型节点*/
    var div = document.createElement('div');
    var text1 = document.createTextNode('1234');
    var comment1 = document.createComment('1324');
    /*文档碎片：一般用来提升性能*/
    var frament1 = document.createDocumentFragment();
    for(var i = 0;i < 100;i++){
        var div = document.createElement('div');
        frament1.appendChild(div);
        document.body.appendChild(frament1);
    }
})();

(function () {
    var demo = document.getElementById('demo');
    var span = document.createElement('span');
    var p = document.createElement('p');
    /*添加节点appendChild:往子节点依次往后添加就类似push方法*/
    demo.appendChild(span);
    demo.appendChild(p);
    /*插入第一个位置的元素到第二个元素之前*/
    demo.insertBefore(p,span);
})();

(function () {
    var demo = document.getElementById('demo');
    /*删除节点可以通过自己删除
    * 亦可以通过父节点删除*/
    var span = document.getElementsByTagName('span')[0];
    console.log(demo);
//    demo.removeChild(span);
    console.log(demo);
    console.log(span);
    //    span.remove();
//    demo.remove();
//
//    console.log(span);
//
//    console.log(demo);
})();

(function () {
    var div1 = document.getElementsByTagName('div')[0];
    console.log(div1.getBoundingClientRect());
})();

(function () {
    /* dom事件包含三个部分
     * 1.触发对象
     * 2.事件属性:就是对应的点击或者触摸等等行为
     * 3.事件触发后执行的行为:就是我们触发事件后要做的事情，一般是一个函数*/
    var div1 = document.getElementsByTagName('div')[1];
    /**/

    div1.onclick = function () {
//        div1.style.width = '200px';
//        div1.style.height = '200px';
        div1.className = 'current'

    }
//    div1.onclick = function () {
//        console.log(2);
//    }
    /*如果我们使用addEventListener：第一个参数表示事件属性
    * 第二个参数表示触发事件后我们需要做的事情*/
//    div1.addEventListener('click',function () {
//        console.log(1);
//    })
//    div1.addEventListener('click',function () {
//        console.log(2);
//    })
})();

(function () {
    /* 需求：点击对应的按钮，让对应的按钮的颜色发生改变
     * 思路1：获取所有的按钮，然后遍历
     * 2:遍历的时候，当点击的时候我们设置对应的样式
     * 3:设置样式我们采用绑定类的方式*/
    var btns = document.getElementsByTagName('button');
    /*遍历对应的按钮*/
    for(var i = 0;i < btns.length;i++){
//        btns[i].onclick  = function () {
//            console.log(i);
//
//            /*把其他的按钮设置为原来的样式,设置对应的类为空*/
//            for(var j = 0;j < btns.length;j++){
//                btns[j].className = '';
//            }
//
//            /*设置样式通过绑定类
//            * 我们不能直接使用i值来获取对应的点击的按钮
//            * 因为当我们点击的时候，对应的i值已经成了类数组的长度
//            * 所以我们需要借助一个对象，这个对象就是this
//            * this:this在哪个函数内部，谁调用的这个函数this就表示谁*/
//            this.className = 'current';
//        }

        /*除了使用this我们还可以使用匿名函数自调
        * 后面的括号表示函数调用，前面的括号用来包含匿名函数*/
        (function (a) {


            btns[a].onclick  = function () {


                /*把其他的按钮设置为原来的样式,设置对应的类为空*/
                for(var j = 0;j < btns.length;j++){
                    btns[j].className = '';
                }

                /*设置样式通过绑定类
                * 我们不能直接使用i值来获取对应的点击的按钮
                * 因为当我们点击的时候，对应的i值已经成了类数组的长度
                * 所以我们需要借助一个对象，这个对象就是this
                * this:this在哪个函数内部，谁调用的这个函数this就表示谁*/
                btns[a].className = 'current';
            }

        })(i)
    }
})();