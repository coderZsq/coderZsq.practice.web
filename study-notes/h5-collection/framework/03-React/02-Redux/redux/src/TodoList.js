import React, { Component } from 'react';
import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction, getMyListAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

  constructor(props) {
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  componentDidMount() {
    // axios.get('').then((res) => {
    //   console.log(res)
    //   const data = res.data
    //   const action = getListAction(data)
    //   store.dispatch(action)
    // })

    // thunk
    // const action = getTodoList()
    // store.dispatch(action)

    // saga
    const action = getMyListAction()
    store.dispatch(action)
    // console.log(action)
  }

  storeChange() {
    this.setState(store.getState)
  }

  changeInputValue(e) {
    // console.log(e.target.value)
    // const action = {
    //   // type: 'changeInput',
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn() {
    // const action = {
    //   // type: 'addItem'
    //   type: ADD_ITEM
    // }
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    // const action = {
    //   // type: 'deleteItem',
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;