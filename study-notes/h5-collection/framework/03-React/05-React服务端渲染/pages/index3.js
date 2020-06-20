import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

  function gotoA() {
    Router.push('/coderzsqA')
  }

  return (
    <>
      <div>我是首页</div>
      <div><Link href="/coderzsqA"><a>去coderZsq A 页面</a></Link></div>
      <div><Link href="/coderzsqB"><a>去coderZsq B 页面</a></Link></div>
      <div>
        <button onClick={gotoA}>coderzsq A</button>
        <button onClick={gotoA}>coderzsq ---</button>
      </div>
    </>
  )
}

export default Home