import React, { Component } from 'react'

class ChildCpn extends Component {
  render() {
    const { name, age, height } = this.props
    return (
      <div>
        <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="coderZsq" age="18" height="1.88" />
        <ChildCpn name="kobe" age="40" height="1.98" />
      </div>
    )
  }
}
