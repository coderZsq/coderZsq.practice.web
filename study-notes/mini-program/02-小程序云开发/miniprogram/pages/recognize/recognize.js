// pages/recognize/recognize.js
Page({
  data: {
    type: 0,
    categories: ['选择身份证', '选择银行卡']
  },
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
  },
  selectClick: function () {
    console.log('selectClick')
  },
  saveClick: function () {
    console.log('saveClick')
  },
  copyClick: function () {
    console.log('copyClick')
  }
})