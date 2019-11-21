// cmps/nav-bar/nav-bar.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: {
      type: String
    },
    titleColor: {
      type: String,
      value: '#000'
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    back: {
      type: String,
      value: 'true'
    },
    home: {
      type: String,
      value: 'true'
    }
  },

  /**
   * Component initial data
   */
  data: {
    statusBarStyle: '', // 状态栏样式
    navBarStyle: '' // 导航看样式
  },

  /**
   * Component methods
   */
  methods: {
    back: function () {
      this.triggerEvent('backTap', { name: 'coderZsq' });
      wx.navigateBack();
    },
    home: function () {
      this.triggerEvent('homeTap');
      wx.navigateBack({
        delta: 999
      });
    }
  },
  lifetimes: {
    attached: function () {
      const statusBarStyle = `
      height: ${wx.db.statusBarHeight}px;
      background-color: ${this.data.statusBarColor}`;
      const navBarStyle = `
      color: ${this.data.titleColor};
      height: ${wx.db.navBarHeight}px;
      background-color: ${this.data.navBarColor}`;
      const cmpHeight = `height: ${wx.db.statusBarHeight + wx.db.navBarHeight}px;`;
      this.setData({
        statusBarStyle,
        navBarStyle,
        cmpHeight
      })
    }
  }
})
