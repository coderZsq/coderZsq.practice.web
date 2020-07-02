//app.js
App({
  onLaunch: function () {
    wx.db = {};
    wx.db.url = (url) => {
      return `https://douban-api.uieee.com/${url}`;
    }
    this.initToast();

    const info = wx.getSystemInfoSync();
    wx.db.statusBarHeight = info.statusBarHeight;
    if (info.platform == 'android') {
      wx.db.navBarHeight = 48;
    } else {
      wx.db.navBarHeight = 44;
    }
  },
  initToast: function () {
    const toastTypeNormal = 0;
    const toastTypeSuccess = 1;
    const toastTypeError = 2;
    let commonToast = (title, type, duration = 1500) => {
      let options = {
        title: title,
        icon: 'none',
        duration: duration
      };
      if (type == toastTypeSuccess) {
        options.icon = 'success';
      } else if (type == toastTypeError) {
        options.image = '/assets/imgs/upsdk_cancel_normal.png';
      }
      wx.showToast(options);
    };

    wx.db.toast = (title, duration) => {
      commonToast(title, toastTypeNormal, duration);
    };
    wx.db.toastSuccess = (title, duration) => {
      commonToast(title, toastTypeSuccess, duration);
    };
    wx.db.toastError = (title, duration) => {
      commonToast(title, toastTypeError, duration);
    };
  },
  globalData: {
    userInfo: null
  }
});