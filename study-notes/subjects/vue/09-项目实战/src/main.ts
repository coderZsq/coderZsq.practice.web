import { createApp } from 'vue'

import { globalRegister } from './global'

// import './service/axios_demo'
import sqRequest from './service'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus/其他
// registerApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// sqRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独相应的response')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

sqRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// sqRequest.get()
