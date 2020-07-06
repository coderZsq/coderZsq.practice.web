import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
import styled, { ThemeProvider } from 'styled-components'

const SQButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`

// const SQPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: red;
//   color: #fff;
//   background-color: green;
// `

const SQPrimaryButton = styled(SQButton)`
  color: #fff;
  background-color: green;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: 'yellow', fontSize: '30px' }}>
        <Home />
        <hr />
        <Profile />
        <SQButton>我是普通的按钮</SQButton>
        <SQPrimaryButton>我是主要的按钮</SQPrimaryButton>
      </ThemeProvider>
    )
  }
}
