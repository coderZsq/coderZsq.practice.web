import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'

const Detailed = () => (
  <div>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={18} lg={16} xl={14}>
        左侧
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
  </div>
)

export default Detailed
