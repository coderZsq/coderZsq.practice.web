// /** + enter
/**
 * 通过id名称获取元素
 * @param id id名称
 * @returns 找到的元素
 */
// function $_id(id) {
//   return document.getElementById(id);
// }
function $(selector) {
  var list = document.querySelectorAll(selector);
  if (list.length == 0){
    return null;
  } else if (list.length == 1){
    return list[0];
  }
  // 兼容IE的forEach
  // var arr = [];
  // for (var i = 0; i < list.length; i++) {
  //   arr.push(list[i])
  // }
  return list;
}
/**
 * 通过类名获取标签
 * @param obj 在哪个对象里面获取
 * @param className 类名
 * @returns {*} 找到的元素
 */
function getElementsClassName(obj, className) {
  // 判断
  if (obj.getElementsByClassName) {
    // 这个方法能用
    return obj.getElementsByClassName(className);
  } else {
    // 这个方法不能用
    var list = obj.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      var ele = list[i];
      if (ele.className === className) {
        // 是我们想要的元素
        arr.push(ele);
      }
    }
    return arr;
  }
}

/**
 * 遍历
 * @param obj
 * @param callback
 */
function each(obj,callback) {
  for (var i = 0; i < obj.length; i++) {
    callback(obj[i],i);
  }
}

/**
 * 获取滚动距离
 * @returns {{left: number, top: number}}
 */
function scroll() {
  if (window.pageXOffset || window.pageYOffset){
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  }else if (document.compatMode === 'CSS1Compat'){
    // w3c标准
    return {
      left: document.documentElement.scrollLeft,
      top: document.documentElement.scrollTop
    }
  }else {
    // 怪异
    return {
      left: document.body.scrollLeft,
      top: document.body.scrollTop
    }
  }
}

/**
 * 获取视口的宽度和高度
 * @returns {{width: number, height: number}}
 */
function client() {
  if (window.innerWidth || window.innerHeight){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else if (document.compatMode === 'CSS1Compat'){
    // w3c标准
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  } else {
    // 怪异模式
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }
}

/**
 * 匀速动画
 * @param obj 要做动画的标签
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj, speed, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var offsetX = obj.offsetLeft;
    var dir = 0;
    if (offsetX <= target) {
      // 判断方向
      // 初始值小于目标值 向右走
      dir = speed;
    } else {
      // 向左走
      dir = -speed;
    }
    offsetX += dir;
    if (Math.abs(target - offsetX) <= speed) {
      clearInterval(obj.timer);
      offsetX = target;
    }
    obj.style.left = offsetX + 'px';
  }, 20);
}

/**
 * 缓动动画
 * @param obj 标签
 * @param data 对象
 * @param callback 回调函数
 */
function buffer(obj,data,callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 定义一个标志
    // 规定 true所有的值都到达目标值了  false 有一个值或者多个值没有到达目标值
    var flag = true;
    for (var k in data) {
      var beginX = parseFloat(getStyleAttr(obj,k)) || 0;
      var target = data[k];
      var speed = (target - beginX) / 10;
      // 判断方向
      if (beginX <= target){
        // 向右走
        // 向上取整
        speed = Math.ceil(speed);
      } else {
        // 向下取整
        speed = Math.floor(speed);
      }
      beginX = beginX + speed;

      // 让所有的值都到达目标值再清空定时器
      if (Math.ceil(beginX) == target) {
        beginX = target;
      }else {
        flag = false;
      }
      // console.log(speed,beginX, target);
      obj.style[k] = beginX + 'px';
    }
    if (flag){
      // 所有值到达目标值了
      clearInterval(obj.timer);
      // 回调函数
      if (callback) callback();
    }
  },20);
}

/**
 * 获取标签的属性值
 * @param obj 元素
 * @param attr 属性
 * @returns {string} 值
 */
function getStyleAttr(obj, attr) {
  if(obj.currentStyle){ // IE 和 opera
    return obj.currentStyle[attr];
  }else {
    return window.getComputedStyle(obj, null)[attr];
  }
}