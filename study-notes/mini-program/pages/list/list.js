// pages/list/list.js
Page({
  data: {
    movies: []
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    });
    wx.getStorage({
      key: options.title,
      success: (result) => {
        this.setData({
          movies: result.data
        });
      }
    });
  },
})