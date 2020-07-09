import React, { PureComponent } from 'react'

import axios from 'axios'
import request from './service/request'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    // 1. 真实开发逻辑: 拿到数据
    // this.setState({
    //   products: [...this.state.products, ...res]
    // })

    // 2. axios发送基本的网络请求
    axios({
      url: 'http://httpbin.org/get',
      params: {
        name: 'coderZsq',
        age: 18
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    axios({
      url: 'http://httpbin.org/post',
      data: {
        name: 'kobe',
        age: 40
      },
      method: 'post'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    // 3. axios发送get/post
    axios.get('http://httpbin.org/get', {
      params: {
        name: 'lilei',
        age: 30
      }
    }).then(console.log)

    axios.post('http://httpbin.org/post', {
      name: 'lucy',
      age: 28
    }).then(console.log)

    // axios.request({

    // })

    // 4. axios部分源码的阅读

    // 5. await async
    try {
      const result = await axios.get('http://httpbin.org/get', {
        params: {
          name: 'lilei',
          age: 30
        }
      })
      console.log(result)
    } catch (err) {
      console.log(err)
    }

    // 6. axios.all
    const request1 = axios({
      url: '/get',
      params: { name: 'coderZsq', age: 18 }
    })
    const request2 = axios({
      url: '/post',
      data: { name: 'kobe', age: 40 },
      method: 'post'
    })
    axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2)
    })

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise1')
      }, 1000)
    })

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise2')
      }, 3000)
    })

    Promise.all([promise1, promise2]).then(res => {
      console.log(res)
    })

    // 8. 创建新的实例
    // const instance1 = axios.create({
    //   baseURL: 'http://coderZsq.xyz',
    //   timeout: 5000,
    //   headers: {

    //   }
    // })

    // const instance2 = axios.create({
    //   baseURL: 'http://baidu.xyz',
    //   timeout: 5000,
    //   headers: {

    //   }
    // })

    // 9. 请求和响应拦截
    // 请求拦截
    axios.interceptors.request.use(config => {
      // 1. 发送网络请求时, 在界面的中间位置显示Loading的组件

      // 2. 某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

      // 3. params/data序列化的操作
      console.log('请求被拦截')
      return config
    }, err => {

    })

    axios.interceptors.response.use(res => {
      return res.data
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log('请求错误')
            break
          case 401:
            console.log('未授权访问')
            break
          default:
            console.log('其他错误信息')
        }
      }
      return err
    })

    axios.get('https://httpbin.org/get', {
      params: {
        name: 'coderZsq',
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    request({
      url: '/get',
      params: {
        name: 'coderZsq',
        age: 18
      }
    }).then(console.log)
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
