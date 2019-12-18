import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('').then((res) => {
      // console.log(res)
      res.data = {
        data: {
          list: [
            '早8点开晨会, 分配今天的代码任务',
            '早9点和项目经理开需求沟通会',
            '晚5点组织人员进行Review代码'
          ]
        }
      }
      const data = res.data
      // console.log(data)
      const action = getListAction(data)
      dispatch(action)
    })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})