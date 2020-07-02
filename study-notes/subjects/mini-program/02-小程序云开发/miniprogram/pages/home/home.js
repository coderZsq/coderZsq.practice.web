// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    categories: [
      {
        title: '身份证',
        icon: '/assets/zhengjian.png'
      },
      {
        title: '银行卡',
        icon: '/assets/yhk.png'
      },
    ]
  },
  pickValueChange: function (event) {
    // 1.获取选中的类型
    const type = event.detail.value

    // 2.跳转到下一个页面, 进行识别
    wx.navigateTo({
      url: `/pages/recognize/recognize?type=${type}`
    })
  }
})