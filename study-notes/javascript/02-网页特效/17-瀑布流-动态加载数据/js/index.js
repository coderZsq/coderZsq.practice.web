window.onload = function () {
  // 1.子盒子定位
  waterFull();

  // 2.监听滚动事件
  window.onscroll = function () {
    // 在什么情况下需要加载最新数据
    // 当最后一个盒子出现
    var loading = checkLoadNewImage();

    if (loading) {
      // 加载最新的数据
      // 从网络获取的数据 Ajax
      var data = [
        {src: 'images/1.jpg'},
        {src: 'images/10.jpg'},
        {src: 'images/23.jpg'},
        {src: 'images/25.jpg'},
        {src: 'images/11.jpg'},
        {src: 'images/40.jpg'},
        {src: 'images/39.jpg'},
        {src: 'images/36.jpg'},
        {src: 'images/35.jpg'}
      ];
      // 从外到内 有上到下
      _.each(data, function (e) {
        // 1.创建box
        var box = document.createElement('div');
        $('main').appendChild(box);
        box.className = 'box';
        // 2.创建pic
        var pic = document.createElement('div');
        box.appendChild(pic);
        pic.className = 'pic';

        // 3.创建img
        var img = document.createElement('img');
        pic.appendChild(img);
        img.src = e.src;
      });
      // 子盒子定位
      waterFull();
    }
  }

};

/**
 * 子盒子定位
 */
function waterFull() {
  // 1.父盒子居中
  var allBox = document.querySelectorAll('#main .box');
  var main = document.querySelector('#main');
  var boxW = allBox[0].offsetWidth;
  // 列数 = parseInt( 视口的宽度 / 盒子的宽度)
  var col = parseInt(client().width / boxW);

  // 盒子居中
  // 父盒子的宽度 =  列数 * 盒子的宽度
  main.style.width = col * boxW + 'px';

  // 2.子盒子定位
  var arrH = [];
  each(allBox, function (ele, index) {
    // 第一行盒子不需要定位 把盒子的高度放在高度数组中
    if (index < col) {
      // 第一行盒子
      arrH.push(ele.offsetHeight);
    } else {
      // 不是第一行盒子 需要定位
      // left
      // top 最小高度
      var minH = _.min(arrH);
      ele.style.top = minH + 'px';

      // left = 索引 * 盒子的宽度
      var minIndex = arrH.indexOf(minH);
      ele.style.left = minIndex * boxW + 'px';
      ele.style.position = 'absolute';

      // 更新高度数组
      arrH[minIndex] = minH + ele.offsetHeight;
      // console.log(arrH,minH,minIndex);
    }
  });
}
/**
 * 什么情况下需要加载最新的盒子  true(要加载) false(不要加载)
 * 当最后一个盒子出现一半的时候就需要加载最新数据
 * 规则 滚动距离 + 视口的高度 >=
 最后一个盒子高度的一半+ 最后一个盒子的offsetTop
 */
function checkLoadNewImage() {
  // 1.所有的盒子
  var allBox = document.querySelectorAll('#main .box');
  var lastIndex = allBox.length - 1;
  var lastBox = allBox[lastIndex];

  var isLoading = scroll().top + client().height >= lastBox.offsetHeight / 2 + lastBox.offsetTop;
  return isLoading;
}