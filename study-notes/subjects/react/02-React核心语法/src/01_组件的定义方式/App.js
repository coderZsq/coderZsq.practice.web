import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: '你好啊,'
    }
  }

  render() {
    return (
      <div>
        <span>我是App组件</span>
        {/* alt + shift + f: 对代码进行格式化 */}
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}