function debounce(fn, delay, options) {
  var timer = null
  options = options || {}
  var leading = options.leading || false
  var callback = options.callback || null
  var handleFn = function () {
    if (timer) clearTimeout(timer)
    var _this = this
    var _arguments = arguments
    if (leading) {
      // 1. 刚开始的时候, 立即执行一次
      var isInvoke = false
      if (!timer) {
        if (callback) {
          callback(fn.apply(_this, _arguments))
        } else {
          fn.apply(_this, _arguments)
        }
        isInvoke = true
      }
      // 2. 延迟执行
      timer = setTimeout(function () {
        timer = null
        if (!isInvoke) {
          if (callback) {
            callback(fn.apply(_this, _arguments))
          } else {
            fn.apply(_this, _arguments)
          }
        }
      }, delay)
    } else {
      timer = setTimeout(function () {
        if (callback) {
          callback(fn.apply(_this, _arguments))
        } else {
          fn.apply(_this, _arguments)
        }
      }, delay)
    }
  }
  handleFn.cancel = function () {
    clearTimeout(timer)
  }
  return handleFn
}