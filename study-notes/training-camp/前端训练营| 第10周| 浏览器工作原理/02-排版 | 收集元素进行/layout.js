function getStyle(element) {
  if (!element.style)
    element.style = {};

  //console.log('---style---')
  for (let prop in element.computedStyle) {
    // console.log(prop);
    var p = element.computedStyle.value;
    element.style[prop] = element.computedStyle[prop].value;

    if (element.style[prop].toString().match(/px$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
    if (element.style[prop].toString().match(/^[0-9\.]+$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
  }
  return element.style;
}

function layout(element) {
  if (!element.computedStyle)
    return;

  var elementStyle = getStyle(element);

  if (elementStyle.display !== 'flex')
    return;

  var items = element.children.filter(e => e.type === 'element');

  items.sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });

  var style = elementStyle;

  ['width', 'height'].forEach(size => {
    if (style[size] === 'auto' || style[size] === '') {
      style[size] = null;
    }
  })

  if (!style.flexDirection || style.flexDirection === 'auto')
    style.flexDirection = 'row';
  if (!style.alignItems || style.alignItems === 'auto')
    style.alignItems = 'stretch';
  if (!style.justifyContent || style.justifyContent === 'auto')
    style.justifyContent = 'flex-start';
  if (!style.flexWrap || style.flexWrap === 'auto')
    style.flexWrap = 'nowwrap';
  if (!style.alignContent || style.alignContent === 'auto')
    style.alignContent = 'stretch';

  var mainSize, mainStart, mainEnd, mainSign, mainBase,
    crossSize, crossStart, crossEnd, crossSign, crossBase;
  if (style.flexDirection === 'row') {
    mainSize = 'width';
    mainStart = 'left';
    mainEnd = 'right';
    mainSign = +1;
    mainBase = 0;

    crossSize = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }
  if (style.flexDirection === 'row-reverse') {
    mainSize = 'width';
    mainStart = 'right';
    mainEnd = 'left';
    mainSign = -1;
    mainBase = style.width;

    crossSize = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }

  if (style.flexDirection === 'column') {
    mainSize = 'height';
    mainStart = 'top';
    mainEnd = 'bottom';
    mainSign = +1;
    mainBase = 0;

    crossSize = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }

  if (style.flexDirection === 'column-reverse') {
    mainSize = 'height';
    mainStart = 'bottom';
    mainEnd = 'top';
    mainSign = -1;
    mainBase = style.height;

    crossSize = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }

  if (style.flexWrap === 'wrap-reverse') {
    var tmp = crossStart;
    crossStart = crossEnd;
    crossEnd = tmp;
    crossSign = -1;
  } else {
    crossBase = 0;
    crossSign = 1;
  }

  var isAutoMainSize = false;
  if (!style[mainSize]) { // auto sizing
    elementStyle[mainSize] = 0;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (itemStyle[mainSize] !== null || itemStyle[mainSize])
        elementStyle[mainSize] = elementStyle[mainSize];
    }
    isAutoMainSize = true;
    // style.flexWrap = 'nowrap'
  }

  var flexLine = [];
  var flexLines = [flexLine];

  var mainSpace = elementStyle[mainSize];
  var crossSpace = 0;

  for (var i = 0; i < item.length; i++) {
    var item = items[i];
    var itemStyle = getStyle(item);

    if (itemStyle[mainSize] === null) {
      itemStyle[mainSize] = 0;
    }
  }
}

module.exports = layout;