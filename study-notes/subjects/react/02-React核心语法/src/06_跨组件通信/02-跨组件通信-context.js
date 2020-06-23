import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  nickname: 'aaaa',
  level: -1
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div >
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nickname: 'kobe',
      level: 99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
