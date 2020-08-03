import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import SQAppHeader from '@/components/app-header'
import SQAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <SQAppHeader />
      {renderRoutes(routes)}
      <SQAppFooter />
    </HashRouter>
  )
})
