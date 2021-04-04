import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';
import store from '@/store';

import marked from 'marked';

export default memo(function App() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
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
