// service 统一出口
import SQRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const sqRequest = new SQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestInteceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default sqRequest
