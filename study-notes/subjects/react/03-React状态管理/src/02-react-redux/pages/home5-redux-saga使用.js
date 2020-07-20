import React, { PureComponent } from 'react'

import {
  incAction,
  addAction,
  fetchHomeMultidataAction
} from '../store/actionCreators'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction())
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  getHomeMultidata() {
    dispatch(fetchHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)