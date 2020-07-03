import React, { PureComponent } from 'react'

class Home extends PureComponent {
  // 即将渲染获取一个时间 beginTime
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now()
  }

  // 渲染完成再获取一个时间 endTime
  componentDidMount() {
    this.endTime = Date.now()
    const interval = this.endTime - this.beginTime
    console.log(`Home渲染时间: ${interval}`)
  }

  render() {
    return <h2>Home</h2>
  }
}

class About extends PureComponent {
  // 即将渲染获取一个时间 beginTime
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now()
  }

  // 渲染完成再获取一个时间 endTime
  componentDidMount() {
    this.endTime = Date.now()
    const interval = this.endTime - this.beginTime
    console.log(`About渲染时间: ${interval}`)
  }

  render() {
    return <h2>About</h2>
  }
}

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
