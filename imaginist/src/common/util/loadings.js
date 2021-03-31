import React from 'react';
import ReactDOM from 'react-dom';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// 当前正在请求的数量
let requestCount = 0;

// 显示loading
export function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement('div');
    dom.setAttribute('id', 'loading');
    document.body.appendChild(dom);
    ReactDOM.render(
      <Spin
        className="loading"
        tip="加载中..."
        size="large"
        indicator={<LoadingOutlined spin />}
      />,
      dom
    );
  }
  requestCount++;
}

// 隐藏loading
export function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'));
  }
}
