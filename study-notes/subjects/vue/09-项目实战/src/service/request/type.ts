import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SQRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInteceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface SQRequestConfig extends AxiosRequestConfig {
  interceptors?: SQRequestInterceptors
  showLoading?: boolean
}
