import React, { PureComponent } from 'react'

import {
  incAction,
  addAction,
  changeBannersAction,
  changeRecommendsAction
} from '../store/actionCreators'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import axios from 'axios'

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)