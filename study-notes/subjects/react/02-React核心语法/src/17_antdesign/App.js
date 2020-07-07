import React, { PureComponent } from 'react'

// import classNames from 'classnames'
import moment from 'moment'

import { Button, DatePicker } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import SQHomeRecommend from './components/home/childCpns/home-recommend'


export default class App extends PureComponent {
  render() {
    const loadings = true

    return (
      <>
        <SQHomeRecommend />
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
        <DatePicker
          defaultValue={moment('2015-06-06', 'YYYY-MM-DD')}
          allowClear={false}
        />
      </>
    )
  }
}

// 知识点: classnames
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isActive: true
//     }
//   }

//   render() {
//     const { isActive } = this.state
//     const isBar = false
//     const errClass = 'error'
//     const warnClass = 10

//     return (
//       <div>
//         {/* 原生React中添加class方法 */}
//         <h2 className={'foo bar active title'}>我是标题1</h2>
//         <h2 className={'title' + (isActive ? ' active' : '')}>我是标题2</h2>
//         <h2 className={['title', (isActive ? ' active' : '')].join(' ')}>我是标题3</h2>

//         {/* classnames库添加class */}
//         <h2 className='foo bar active title'>我是标题4</h2>
//         <h2 className={classNames('foo', 'bar', 'active', 'title')}>我是标题5</h2>
//         <h2 className={classNames({ 'active': isActive, 'bar': isBar }, 'title')}>我是标题6</h2>
//         <h2 className={classNames('foo', errClass, warnClass, { 'active': isActive })}>我是标题7</h2>
//         <h2 className={classNames(['active', 'title'])}>我是标题8</h2>
//         <h2 className={classNames(['active', 'title', { 'bar': isBar }])}>我是标题9</h2>
//       </div >
//     )
//   }
// }
