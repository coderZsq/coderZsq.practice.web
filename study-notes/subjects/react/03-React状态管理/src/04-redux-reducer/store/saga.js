import { takeEvery, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_HOME_MULTIDATA } from './home/constants'
import {
  changeBannersAction,
  changeRecommendsAction
} from './home/actionCreators'

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendsAction(recommends))
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends))
  ])
}

function* mySaga() {
  // takeLastest takeEvery区别:
  // takeLatest: 依次只能监听一个对应的action
  // takeEvery: 每一个都会被执行
  yield all([
    takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
    // takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  ])
}

export default mySaga