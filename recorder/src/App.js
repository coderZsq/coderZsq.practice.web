import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';
import store from '@/store';

export default memo(function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Suspense fallback={''}>{renderRoutes(routes)}</Suspense>
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
});
