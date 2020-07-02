import React, { PureComponent } from 'react'

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="中国" />
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <EnhanceHome nickname="coderZsq" level={90} />
        <EnhanceAbout nickname="kobe" level={90} />
      </div>
    )
  }
}
