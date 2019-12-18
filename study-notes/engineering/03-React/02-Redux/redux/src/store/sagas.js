import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreator'
import axios from 'axios'

// generator
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('').then((res) => {
  //   // console.log(res)
  //   res.data = {
  //     data: {
  //       list: [
  //         '早8点开晨会, 分配今天的代码任务',
  //         '早9点和项目经理开需求沟通会',
  //         '晚5点组织人员进行Review代码'
  //       ]
  //     }
  //   }
  //   const data = res.data
  //   // console.log(data)
  //   const action = getListAction(data)
  //   put(action)
  // })
  const res = yield axios.get('')
  res.data = {
    data: {
      list: [
        '早8点开晨会, 分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '晚5点组织人员进行Review代码'
      ]
    }
  }
  const action = getListAction(res.data)
  yield put(action)
}

export default mySaga