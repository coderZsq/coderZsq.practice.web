import React, { PureComponent } from 'react'

import Home from './pages/home4-redux-thunk使用'
import About from './pages/about3'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
