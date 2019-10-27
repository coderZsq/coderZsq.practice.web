// pages/login/login.js
Page({
  wechatLogin: function() {
    console.log('wechatLogin');
  },
  doubanLogin: function() {
    console.log('doubanLogin');
  },
  openAgreement: function() {
    wx.navigateTo({
      url: '/pages/agreement/agreement'
    });
  }
})