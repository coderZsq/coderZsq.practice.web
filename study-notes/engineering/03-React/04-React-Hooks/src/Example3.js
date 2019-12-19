import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log(`componentDidMount => You Clicked ${this.state.count} times`)
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate => You Clicked ${this.state.count} times`)
  }

  render() {
    return (
      <div>
        <p>You Clicked {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
      </div>
    );
  }

  addCount() {
    this.setState({ count: this.state.count + 1 })
  }
}

export default Example3;