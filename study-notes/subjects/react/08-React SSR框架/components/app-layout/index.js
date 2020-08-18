import Head from 'next/head'
import Link from 'next/link'
import React, { memo } from 'react'

export default memo(function AppLayout(props) {
  return (
    <div>
      <Head>
        <title>网易云音乐</title>
      </Head>
      <header>
        <h2>Header</h2>
        <Link href="/">
          <a>首页</a>
        </Link>
        <Link href="/about">
          <a>关于</a>
        </Link>
        <hr />
      </header>
      {props.children}
      <footer>
        <hr />
        <p>网站是一个音乐网站</p>
      </footer>
    </div>
  )
})
