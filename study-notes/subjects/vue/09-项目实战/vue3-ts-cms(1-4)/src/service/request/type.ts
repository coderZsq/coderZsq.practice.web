import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInteceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface SQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SQRequestInterceptors<T>
  showLoading?: boolean
}
