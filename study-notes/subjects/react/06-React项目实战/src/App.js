import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import { HashRouter } from 'react-router-dom'
import SQAppHeader from '@/components/app-header'
import SQAppFooter from '@/components/app-footer'
import SQAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SQAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <SQAppFooter />
        <SQAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
