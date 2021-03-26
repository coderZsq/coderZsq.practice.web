import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Spin } from 'antd';

import routes from '@/router';
import store from '@/store';

import SQAppHeader from 'components/app-header';

import { AppWrapper } from './App.style';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppWrapper>
          <SQAppHeader />
          <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
        </AppWrapper>
      </HashRouter>
    </Provider>
  );
});
