// import Head from 'next/head'
import Myheader from '../components/myheader'
import '../public/test.css'
import { Button } from 'antd'

function Header() {
  return (
    <>
      {/* <Head>
        <title>标题</title>
        <meta charSet="utf-8" />
      </Head> */}
      <Myheader />
      <div>coderZsq.github.io</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}
export default Header