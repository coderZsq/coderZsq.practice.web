// pages/c-cloudfunc/c-cloudfunc.js
Page({
  basicUsing: function () {
    const num1 = 100
    const num2 = 230

    // 如何调用云函数
    wx.cloud.callFunction({
      name: 'sum', // 调用哪一个云函数
      data: { // 要给云函数传递的参数
        num1,
        num2
      }
    }).then(res => {
      console.log(res)
    })
  },
  getOpenID: function () {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
    })
  },
  removeMultiData: function () {
    wx.cloud.callFunction({
      name: 'removeMultiData'
    }).then(res => {
      console.log(res)
    })
  },
  generateCode: function () {
    wx.cloud.callFunction({
      name: 'generateCode'
    }).then(res => {

    })
  }
})