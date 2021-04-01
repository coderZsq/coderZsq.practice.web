import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';
import store from '@/store';

import marked from 'marked';
import hljs from 'highlight.js';

export default memo(function App() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

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
