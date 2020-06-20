import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart', (...args) => {
    console.log('1. routeChangeStart -> 路由开始变化, 参数为: ', ...args)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2. routeChangeComplete -> 路由变化结束, 参数为: ', ...args)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3. beforeHistoryChange -> 路由变化结束, 参数为: ', ...args)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log('4. routeChangeError -> 路由发生错误, 参数为: ', ...args)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log('5. hashChangeStart -> 参数为: ', ...args)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6. hashChangeComplete -> 参数为: ', ...args)
  })

  function gotoXiaojiejie() {
    // Router.push('/xiaojiejie?name=井空')
    Router.push({
      pathname: '/xiaojiejie',
      query: {
        name: '井空'
      }
    })
  }

  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href={{ pathname: '/xiaojiejie', query: { name: '结衣' } }}><a>选择结衣</a></Link>
        <br />
        <Link href="/xiaojiejie?name=井空"><a>选择井空</a></Link>
      </div>
      <div>
        <button onClick={gotoXiaojiejie}>选井空</button>
      </div>
      <div>
        <Link href="#coderZsq">选小卡</Link>
      </div>
    </>
  )
}

export default Home