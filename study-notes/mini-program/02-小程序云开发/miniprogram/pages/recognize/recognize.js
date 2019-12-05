// pages/recognize/recognize.js
const idCollection = wx.cloud.database().collection('idcards')

Page({
  data: {
    type: 0,
    categories: ['身份证', '银行卡'],
    idInfo: null
  },
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
  },
  /**
   * 选择名片, 并且是别别信息
   */
  selectClick: function () {
    // 1. 让用户拍照或者选择相册
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const filePath = res.tempFilePaths[0]

        wx.showLoading({
          title: this.data.categories[this.data.type] + '识别中'
        })

        // 2. 将照片上传到云存储中
        this.uploadFileToCloud(filePath)
      }
    });
  },
  uploadFileToCloud: function (filePath) {
    const timestamp = new Date().getTime()
    wx.cloud.uploadFile({
      filePath,
      cloudPath: `images/openid_${timestamp}.jpg`
    }).then(res => {
      const fileID = res.fileID

      // 3. 根据fileID换取临时的URL
      this.getTempURL(fileID)
    })
  },
  getTempURL: function (fileID) {
    wx.cloud.getTempFileURL({
      fileList: [fileID]
    }).then(res => {
      const fileURL = res.fileList[0].tempFileURL

      // 4. 识别URL
      this.recognizeImageURL(fileURL, fileID)
    })
  },
  recognizeImageURL: function (fileURL, fileID) {
    // 服务器地址: 网络请求(将对应的域名在小程序后台进行配置)
    // npm -> wx-js-utils -> 5
    wx.cloud.callFunction({
      name: 'recognizeCard',
      data: {
        fileURL,
        type: this.data.type
      }
    }).then(res => {
      this.data.type == 0 ? this.handleIDInfo(res) : this.handleBankInfo(res)
      wx.hideLoading()
    })
  },
  handleBankInfo: function (res) {
    console.log(res)
  },
  handleIDInfo: function (res) {
    if (!res.result.id) {
      this.deletePhoto(fileID)
      wx.showToast({
        title: '卡证识别失败'
      })
      return
    }
    // 5. 获取信息
    const result = res.result
    const idInfo = {
      id: result.id,
      address: result.address,
      birth: result.birth,
      name: result.name,
      nation: result.nation,
      sex: result.sex,
      fileID: fileID
    }

    // 6. 展示信息
    this.setData({ idInfo })
  },
  /**
   * 保存信息
   */
  saveClick: function () {
    wx.showLoading({
      title: '保存信息中'
    })

    // 查询是否已经保存过这个信息
    idCollection.where({
      id: this.data.idInfo.id
    }).get().then(res => {
      if (res.data.length > 0) {
        const _id = res.data[0]._id
        const fileID = res.data[0].fileID
        this.coverInfo(_id)
        this.deletePhoto(fileID)
      } else {
        this.saveInfo()
      }
    })
  },
  deletePhoto: function (fileID) {
    wx.cloud.deleteFile({
      fileList: [fileID]
    })
  },
  coverInfo: function (_id) {
    idCollection.doc(_id).set({
      data: this.data.idInfo
    })
      .then(this.showSuccess)
      .catch(this.showFail)
  },
  saveInfo: function () {
    idCollection.add({
      data: this.data.idInfo
    })
      .then(this.showSuccess)
      .catch(this.showFail)
  },
  showSuccess: function () {
    wx.showToast({
      title: '信息保存成功'
    })
  },
  showFail: function () {
    wx.showToast({
      title: '信息保存失败'
    })
  },
  copyClick: function () {
    wx.setClipboardData({
      data: `${this.data.idInfo.id}`
    })
  }
})