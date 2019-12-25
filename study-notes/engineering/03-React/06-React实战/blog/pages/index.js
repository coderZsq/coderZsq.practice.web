import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../public/style/pages/index.css'

const Home = () => {

  const [mylist, setMylist] = useState(
    [
      { title: 'title', context: 'context' },
      { title: 'title', context: 'context' },
      { title: 'title', context: 'context' },
      { title: 'title', context: 'context' }
    ]
  )

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={18} lg={16} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" />2019-06-28</span>
                  <span><Icon type="folder" />视频教程</span>
                  <span><Icon type="fire" />5864人</span>
                </div>
                <div className="list-content">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default Home
