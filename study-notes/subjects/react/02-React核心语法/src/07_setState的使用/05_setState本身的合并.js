import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    // 1. setState本身被合并
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 2. setState合并时进行累加
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}
