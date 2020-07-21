import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './reducer.js'

// composeEnhancers函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 应用一些中间件
// 1. 引入thunkMiddleware中间件(上面)
// 2. 创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))

sagaMiddleware.run(saga)

export default store