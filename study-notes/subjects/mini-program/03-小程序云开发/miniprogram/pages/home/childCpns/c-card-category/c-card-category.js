// pages/home/childCpns/c-card-category/c-card-category.js
Component({
  /**
   * Component properties
   */
  properties: {
    categories: {
      type: Array,
      value: []
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
    itemClick: function (event) {
      // 1. 获取点击index
      const index = event.currentTarget.dataset.index

      // 2. 界面的跳转, 并且传入index
      wx.navigateTo({
        url: '/pages/cardlist/cardlist?type=' + index
      })
    }
  }
})
