window.onload = function () {
  // 1.父盒子居中
  var allBox = document.querySelectorAll('#main .box');
  var main = document.querySelector('#main');
  var boxW = allBox[0].offsetWidth;
  // 列数 = parseInt( 视口的宽度 / 盒子的宽度)
  var col = parseInt(client().width / boxW);

  // 盒子居中
  // 父盒子的宽度 =  列数 * 盒子的宽度
  main.style.width = col * boxW + 'px';
};