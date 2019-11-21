// pages/list/list.js
Page({
  data: {
    movies: [],
    title: ''
  },
  onLoad: function (options) {
    this.setData({
      title: options.title
    });
    // wx.setNavigationBarTitle({
    //   title: options.title
    // });
    wx.getStorage({
      key: options.title,
      success: (result) => {
        this.setData({
          movies: result.data
        });
      }
    });
  },
  back: function (evt) {
    console.log('back', evt.detail);
  },
  home: function (evt) {
    console.log('home', evt);
  }
})