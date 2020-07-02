// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: '' // 标题
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const movie = JSON.parse(options.movie);
    this.setData({
      title: movie.title
    });
    // wx.setNavigationBarTitle({
    //   title: movie.title
    // });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})