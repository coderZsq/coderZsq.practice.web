// import 'css-loader!../css/style.css';
import '../css/style.css';
import '../css/title.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊, 李银河';

document.body.appendChild(divEl);
