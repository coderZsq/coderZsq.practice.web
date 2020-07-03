import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }

    // 渲染完成再获取一个时间 endTime
    componentDidMount() {
      this.endTime = Date.now()
      const interval = this.endTime - this.beginTime
      console.log(`${WrappedComponent.name}渲染时间: ${interval}`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <TimeAbout />
      </div>
    )
  }
}

class Person {

}
console.log(Person.name)