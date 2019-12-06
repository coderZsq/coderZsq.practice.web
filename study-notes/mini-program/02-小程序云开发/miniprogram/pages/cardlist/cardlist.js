// pages/cardlist/cardlist.js
const LIMIT = 10

Page({

  /**
   * Page initial data
   */
  data: {
    type: 0,
    page: 0,
    list: []
  },
  onLoad: function (options) {
    // 1. 获取要展示的类型
    this.setData({
      type: options.type
    })

    // 2.去数据库中查询数据
    this.queryDataFromDB()
  },
  queryDataFromDB: function () {
    const collectionName = this.data.type == 0 ? 'idcards' : 'bankcards'
    wx.cloud.database()
      .collection(collectionName)
      .skip(this.data.page * LIMIT).limit(LIMIT)
      .get()
      .then(res => {
        // 页码 +1
        this.setData({
          page: this.data.page + 1
        })

        // 将最新的数据添加到数组的后面
        const oldList = this.data.list
        oldList.push(...res.data)
        this.setData({ list: oldList })
      })
  },
  copyClick: function (event) {
    const index = event.currentTarget.dataset.index
    wx.setClipboardData({
      data: this.data.list[index].id,
      success: () => {
        wx.showToast({
          title: '信息复制成功'
        })
      }
    })
  },
  deleteClick: function (event) {
    const index = event.currentTarget.dataset.index
    // 1. 删除数据库中信息
    const _id = this.data.list[index]._id
    wx.cloud.database().collection('idcards')
      .doc(_id)
      .remove()
      .then(res => {
        const oldList = this.data.list
        oldList.splice(index, 1)
        this.setData({ list: oldList })
        wx.showToast({
          title: '删除信息成功'
        })
      })
  }
})