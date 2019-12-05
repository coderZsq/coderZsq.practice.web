// pages/recognize/recognize.js
Page({
  data: {
    type: 0,
    categories: ['选择身份证', '选择银行卡'],
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
          title: '身份证识别中'
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
        fileURL
      }
    }).then(res => {
      wx.hideLoading()

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
    })
  },
  /**
   * 保存信息
   */
  saveClick: function () {
    console.log('saveClick')
  },
  copyClick: function () {
    console.log('copyClick')
  }
})