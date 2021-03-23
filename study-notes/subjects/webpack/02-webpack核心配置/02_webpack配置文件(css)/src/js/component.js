// import 'css-loader!../css/index.css';
import '../css/index.css';
import '../css/component.less';

function component() {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'Webpack'].join(' ');
  element.className = 'content';

  return element;
}
document.body.appendChild(component());