window.onload = function () {
    loadData();
};

function leftCategory() {
    // 1.获取标签
    var leftBox = document.querySelector('.main-left');
    var oul = leftBox.children[0];

    // 2.获取移动距离
    var startY = 0;
    var endY = 0;
    var distance = 0;
    // 记录当前的y值 移动的距离
    var currY = 0;

    // 最大y值
    var maxY = 0;
    // 最小y值
    var minY = - (oul.offsetHeight - leftBox.offsetHeight);

    // 缓冲区
    var buffer = 150;
    var del = 0;

    function addTransition(){
        oul.style.transition = 'all 0.3s';
        oul.style.webkitTransition = 'all 0.3s';
    }
    function removeTransition(){
        oul.style.transition = 'none';
        oul.style.webkitTransition = 'none';
    }
    function changePossion(y){
        oul.style.transform = 'translateY('+ y +'px)';
        oul.style.webkitTransform = 'translateY('+ y +'px)';
    }
    oul.addEventListener('touchstart',function (e) {
        startY = e.touches[0].clientY;
    });
    oul.addEventListener('touchmove',function (e) {
        endY = e.touches[0].clientY;
        distance = endY - startY;
        del = currY + distance;

        // 边界限定
        if (del >= maxY + buffer){
            del = maxY + buffer;
        } else if (del <= minY - buffer){
            del = minY - buffer;
        }
        // oul.style.transition = 'none';
        removeTransition();

        oul.style.transform = 'translateY('+ del +'px)';
    })
    oul.addEventListener('touchend',function () {
        // currY = currY + distance;
        
        if (del >= maxY){
            currY = maxY;
        } else if (del <= minY){
            currY = minY;
        } else {
            currY = del;
        }
        // oul.style.transition = 'all 0.3s';
        addTransition();

        // oul.style.transform = 'translateY('+ currY +'px)';
        changePossion(currY);
    })

    // 3.点击事件

    mjd.tap(oul,function (e) {

        // 排他
        for (var i = 0; i < oul.children.length; i++) {
            var ele = oul.children[i];
            ele.index = i;
            ele.className = '';
        }

        // 修改y值
        // 索引 * li的高度
        var li = e.target.parentNode;
        li.className = 'current';

        var tempY = - li.offsetHeight * li.index;

        if (tempY <= minY){
            tempY = minY;
        }
        currY = tempY;
        // oul.style.transition = 'all 0.3s';
        addTransition();

        // oul.style.transform = 'translateY('+ tempY +'px)';
        changePossion(tempY);
    })
}

/**
 * 请求网络数据
 */
function loadData() {
    // 1.创建请求对象
    var xhr = new XMLHttpRequest();
    var ul = document.querySelector('.main-left ul');

    // 2.监听回调
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4){
            var data = JSON.parse(xhr.responseText);
            // 成功
            var list = data.list;

            mjd.each(list,function (ele,index) {
                var title = ele.title;
                // 1.创建li
                var li = document.createElement('li');
                ul.appendChild(li);
                if (index == 0) li.className = 'current';

                // 2.创建a标签
                var a = document.createElement('a');
                li.appendChild(a);
                a.href = 'javascript:;';
                a.innerHTML = title;
            });

            leftCategory();
        }
    };
    // 3.设置请求方式 url 同步还是异步
    xhr.open('post','http://result.eolinker.com/2NyUDaifa182caee2a331ae800825f26e9e01d51faecd8b?uri=/api/demo');

    // 4.发送
    xhr.send();


}