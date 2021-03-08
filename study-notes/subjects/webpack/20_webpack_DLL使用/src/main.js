import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import ReactApp from './App.jsx';

// React的代码
ReactDom.render(<ReactApp />, document.getElementById('app'));

console.log('main');
