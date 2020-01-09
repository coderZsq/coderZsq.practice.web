// /** + enter
/**
 * 通过id名称获取元素
 * @param id id名称
 * @returns 找到的元素
 */
function $(id) {
  return document.getElementById(id);
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