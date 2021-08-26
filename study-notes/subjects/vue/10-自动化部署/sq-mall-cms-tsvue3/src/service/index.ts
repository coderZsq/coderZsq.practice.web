import HYRequest from './request/request'
import { API_BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
