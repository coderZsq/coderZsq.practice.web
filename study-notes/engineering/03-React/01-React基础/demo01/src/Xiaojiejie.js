import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }

  render() {
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="sq">增加服务: </label>
          <input id="sq" className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <XiaojiejieItem />
                </div>
              )
            })
          }
        </ul>
      </Fragment >
    )
  }

  inputChange(e) {
    // console.log(e.target.value)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }

  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 删除列表项
  deleteItem(index) {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default Xiaojiejie