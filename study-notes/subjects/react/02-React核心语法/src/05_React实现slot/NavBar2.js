import React, { Component } from 'react'

export default class NavBar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">
          {leftSlot}
        </div>
        <div className="nav-item nav-center">
          {centerSlot}
        </div>
        <div className="nav-item nav-right">
          {rightSlot}
        </div>
      </div>
    )
  }
}
