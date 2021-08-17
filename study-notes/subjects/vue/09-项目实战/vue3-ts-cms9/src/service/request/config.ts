// 1. 方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderZsq.org/dev'
// const BASE_NAME = 'coderZsq'

// const BASE_URL = 'http://coderZsq.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderZsq.org/test '
// const BASE_NAME = 'james'

// 2. 根据process.env.NODE_ENV区分
// 开发环境: development
// 生产环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderZsq.org/prod'
} else {
  BASE_URL = 'http://coderZsq.org/test '
}

export { BASE_URL, TIME_OUT }
