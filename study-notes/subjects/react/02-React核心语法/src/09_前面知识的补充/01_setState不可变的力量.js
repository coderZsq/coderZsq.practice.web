import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    // 引用类型
    this.state = {
      firends: [
        { name: 'lilei', age: 20 },
        { name: 'lily', age: 25 },
        { name: 'lucy', age: 22 }
      ]
    }
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.firends !== this.state.firends) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.firends.map((item, index) => {
              return (
                <li key={item.name}>
                  姓名: {item.name}
                  年龄: {item.age}
                  <button onClick={e => this.incrementAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }

  insertData() {
    // 1. 在开发中不要这样来做
    // const newData = { name: 'tom', age: 30 }
    // this.state.firends.push(newData)
    // this.setState({
    //   firends: this.state.firends
    // })

    // 2. 推荐做法
    const newFriends = [...this.state.firends]
    newFriends.push({ name: 'tom', age: 30 })
    this.setState({
      firends: newFriends
    })
  }

  incrementAge(index) {
    const newFriends = [...this.state.firends]
    newFriends[index].age += 1
    this.setState({
      firends: newFriends
    })
  }
}
