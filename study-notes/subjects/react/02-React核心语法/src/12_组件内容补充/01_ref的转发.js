import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

// 高阶组件forwardRef
const Profile = forwardRef(function (props, ref) {
  return <p ref={ref}>Profile</p>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} name={"coderZsq"} />
        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }

  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.profileRef.current)
  }
}
