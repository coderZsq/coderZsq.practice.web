import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NavBar>
        <NavBar2 leftSlot={<span>aaa</span>}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<a href="/#">ccc</a>} />
      </div>
    )
  }
}
