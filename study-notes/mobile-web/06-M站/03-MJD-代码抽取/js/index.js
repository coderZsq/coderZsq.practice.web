window.onload = function () {
    // 1.头部改变颜色
    changeNavColor();
    // 2.轮播图
    banner();
    // 3.秒杀
    secondKill();
};

/**
 * 头部改变颜色
 * 当滚动距离大于等于轮播图的高度 导航条完全不透明
 * 随着滚动距离的增加不透明度就增加
 */
function changeNavColor() {
    // 1.获取标签
    var banner = document.querySelector(".banner");
    var bannerH = banner.offsetHeight;
    // 头部
    var header = document.querySelector('.header-in');

    // 2.添加事件
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;

        var scale = scrollTop / bannerH;

        if (scale >= 1.0) scale = 1.0;

        header.style.backgroundColor = 'rgba(201, 21, 35, '+ (scale * 0.8) +')';

    }
}

/**
 * 轮播图
 */
function banner() {
    // 1.获取标签
    var banner = document.querySelector('.banner');
    var bannerW = banner.offsetWidth;

    var oul = banner.children[0];
    var ol = banner.children[1];
    var list = ol.children;

    // 2.移动
    var index = 1;

    // 偏移距离
    function translateX(obj,x) {
        obj.style.transform = 'translateX('+ x +'px)';
        obj.style.webkitTransform = 'translateX('+ x +'px)';
    }
    function addTransition() {
        oul.style.transition = 'all 0.3s';
        oul.style.webkitTransition = 'all 0.3s';
    }
    function removeTransition() {
        oul.style.transition = 'none';
        oul.style.webkitTransition = 'none';
    }
    var timer = setInterval(autoPlay,1000);
    function autoPlay() {
        index++;
        // oul.style.transition = 'all 0.3s';
        addTransition();

        translateX(oul,-bannerW*index);
    }
    // 当过渡结束之后有一个事件
    /*oul.addEventListener('transitionend',function () {
        if (index >= 9){
            index = 1;
        }
        oul.style.transition = 'none';
        oul.style.transform = 'translateX('+ (-10*index) +'%)';
    });
    oul.addEventListener('webkitTransitionEnd',function () {
        if (index >= 9){
            index = 1;
        }
        oul.style.transition = 'none';
        oul.style.transform = 'translateX('+ (-10*index) +'%)';
    })*/

    // 3.动画结束之后会触发这个事件
    mjd.transitionend(oul,function () {
        if (index >= 9){
            index = 1;
        }else if (index <= 0){
            index = 8;
        }
        // oul.style.transition = 'none';
        removeTransition();

        // oul.style.transform = 'translateX('+ (-10*index) +'%)';
        translateX(oul,-bannerW * index);

        // 2.切换指示器
        // 排他
        for (var i = 0; i < list.length; i++) {
            list[i].className = '';
        }
        // console.log(index);
        list[index-1].className = 'current';
    })

    // 4.手指移动
    var startX = 0;
    var endX = 0;
    // 移动距离
    var distance = 0;
    oul.addEventListener('touchstart',function (e) {
        // 清除定时器
        clearInterval(timer);

        startX = e.touches[0].clientX;
    });

    oul.addEventListener('touchmove',function (e) {
        endX = e.touches[0].clientX;
        distance = endX - startX;
        // console.log(distance);
        // 获取原来的坐标值
        var currX = -bannerW * index;
        var del = currX + distance;

        // 移除过渡
        // oul.style.transition = 'none';
        removeTransition();

        // oul.style.transform = 'translateX('+ del +'px)';
        translateX(oul,del);
    })
    // 当移动的距离大于屏幕的1/3的时候我们跳转到下一页或者上一页
    // 如果移动的距离没有大于1/3我们就复位
    oul.addEventListener('touchend',function () {
        if (Math.abs(distance) >= bannerW/3){
            // 跳转到下一页/上一页
            if (distance < 0){
                // 跳转到下一页
                index++;
            }else {
                // 上一页
                index--;
            }
        }
        // oul.style.transition = 'all 0.3s';
        addTransition();
        //复位
        // 移动oul
        // oul.style.transform = 'translateX('+ (-bannerW*index) +'px)';
        translateX(oul,-bannerW * index);
        // 开启定时器
        timer = setInterval(autoPlay,1000);
    })
}

/**
 * 秒杀
 */
function secondKill() {
    // 1.总时长
    var time = 12 * 60 * 60;
    var spans = document.querySelector('.product-kill').children;

    // 2.定时器
    setInterval(function () {
        time--;
        var h = parseInt(time / (60*60));
        // console.log(h);
        var s = time % 60;
        // console.log(s);
        // 一小时
        var m = parseInt(time % (60*60) / 60);
        // console.log(h,m,s);
        // 7
        spans[0].innerHTML = parseInt(h/10) > 0 ? parseInt(h/10) : 0;
        spans[1].innerHTML = h % 10;

        // 分钟
        spans[3].innerHTML = parseInt(m/10) > 0 ? parseInt(m/10) : 0;
        spans[4].innerHTML = m % 10;

        // 秒
        spans[6].innerHTML = parseInt(s/10) > 0 ? parseInt(s/10) : 0;
        spans[7].innerHTML = s % 10;
    },1000);
}