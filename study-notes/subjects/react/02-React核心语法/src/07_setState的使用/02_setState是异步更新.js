import React, { Component } from 'react'

function Home(props) {
  // Hello World
  return <h1>{props.message}</h1>
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    )
  }

  componentDidUpdate() {
    // 方式二: 获取异步更新的state
    console.log(this.state.message)
  }

  changeText() {
    // 2. setState是异步更新
    // this.setState({
    //   message: '你好啊, 李银河'
    // })
    // console.log(this.state.message) // Hello World

    // 方式一: 获取异步更新后的数据
    // setState(更新的state, 回调函数)
    this.setState({
      message: '你好啊, 李银河'
    }, () => {
      console.log(this.state.message)
    })
  }
}
