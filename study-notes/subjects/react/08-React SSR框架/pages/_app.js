import '../styles/globals.css'
import '../styles/app.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
        <Link href="/profile">
          <a>我的</a>
        </Link>
        <hr />
      </header>

      <Component {...pageProps} />

      <footer>
        <hr />
        <p>网站是一个音乐网站</p>
      </footer>
    </>
  )
}

export default MyApp
