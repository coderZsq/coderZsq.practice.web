// cmps/movie-item/movie-item.js
Component({
  /**
   * Component properties
   */
  properties: {
    movie: {
      type: Object,
      value: null
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    detail: function () {
      // 序列化: 将JSON对象转换为JSONString
      // 反序列化: 将JSONString转换为JSON对象
      wx.navigateTo({
        url: `/pages/detail/detail?movie=${JSON.stringify(this.data.movie)}`
      });
    }
  }
})
