import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import SubComponent from './SubComponent'
import Css from './Css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class ParentComponent extends Component {
  // 在某一时刻, 可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }

  componentWillMount() {
    console.log('componentWillMount ----- 组件将要挂载到页面的时刻')
  }

  componentDidMount() {
    console.log('componentDidMount ----- 组件挂载完成的时刻')
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
      .catch((error) => { console.log('axios 获取数据失败:' + error) })
  }

  shouldComponentUpdate() {
    console.log('1 - shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('2 - componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('4 - componentDidUpdate')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  render() {
    console.log('3 - render ----- 组件挂载中')
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="sq">增加服务: </label>
          <input
            id="sq"
            className='input'
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index + item}
                  >
                    <SubComponent
                      // avname='新垣结衣'
                      key={index + item}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                      list={this.state.list}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Css />
      </Fragment >
    )
  }

  inputChange(e) {
    // console.log(e.target.value)
    // this.state.inputValue = e.target.value
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }

  // 删除列表项
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default ParentComponent