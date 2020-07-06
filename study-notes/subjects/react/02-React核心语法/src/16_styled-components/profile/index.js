import React, { PureComponent } from 'react'

import styled from 'styled-components'

/**
 * 特点:
 * 1.props穿透
 * 2. attrs的使用
 * 3. 传入state作为props属性
 */

const SQInput = styled.input.attrs({
  placeholder: 'coderZsq',
  bColor: 'red'
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      color: 'purple'
    }
  }

  render() {
    return (
      <div>
        <input type="password" />
        <SQInput type="password" color={this.state.color} />
        <h2> 我是profile的标题</h2>
        <div>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </div>
      </div>
    )
  }
}
