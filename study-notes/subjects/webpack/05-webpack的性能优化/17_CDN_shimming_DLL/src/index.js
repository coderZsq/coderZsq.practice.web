console.log('Hello Index');
// console.log(_.join(['Hello', 'Index']));
// console.log(dayjs(), 'Index');

// import动态函数加载一个库
// import('lodash').then((res) => {});

const button = document.createElement('button');
button.innerHTML = '加载元素';
button.addEventListener('click', () => {
  // prefetch -> 魔法注释 (magic comments)
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  import(
    /* webpackChunkName: 'element' */
    /* webpackPrefetch: true */
    './element'
  ).then(({ default: element }) => {
    document.body.appendChild(element);
  });
});
document.body.appendChild(button);
