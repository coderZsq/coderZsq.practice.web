export const setCursorPosition = (ctrl, pos) => {
  //设置光标位置函数
  if (ctrl.setSelectionRange) {
    //非ie
    ctrl.focus(); // 获取焦点
    ctrl.setSelectionRange(pos, pos); // 设置选定区的开始和结束点
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange(); // 创建选定区
    range.collapse(true); // 设置为折叠,即光标起点和结束点重叠在一起
    range.moveEnd('character', pos); // 移动结束点
    range.moveStart('character', pos); // 移动开始点
    range.select(); // 选定当前区域
  }
};

export const getCursorPosition = (ctrl) => {
  var CaretPos = 0;
  // IE Support
  if (document.selection) {
    ctrl.focus(); // 获取焦点
    var Sel = document.selection.createRange(); // 创建选定区域
    Sel.moveStart('character', -ctrl.value.length); // 移动开始点到最左边位置
    CaretPos = Sel.text.length; // 获取当前选定区的文本内容长度
  }
  // Firefox support (非ie)
  else if (ctrl.selectionStart || ctrl.selectionStart === '0') {
    CaretPos = ctrl.selectionStart; // 获取选定区的开始点
  }
  return CaretPos;
};
