// pages/c-storage/c-storage.js
Page({
  data: {
    imgFileID: '',
    videoFileID: '',
    localFilePath: 'http://tmp/wx5457a45675ff3fe7.o6zAJsztWjPuJCykbf-DFkWeeTFY.r2TWKIPN7a4686945a65c7d018159f80ec4ba4e36164.quicktime'
  },
  uploadFile: function () {
    // 1. 用户选择一张照片 (拍照, 相册)
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 2.  获取选中图片的路径
        const filePath = res.tempFilePaths[0]

        // 3. 上传图片到云存储中
        const timestamp = new Date().getTime()
        const openid = 'openid'
        const cloudPath = `images/${timestamp}_${openid}.png`
        wx.cloud.uploadFile({
          filePath, // 要上传的图片路径
          cloudPath, // 上传到 cloud 的什么位置
        }).then(res => {
          const fileID = res.fileID
          this.setData({ imgFileID: fileID })
        })
      }
    })
  },
  uploadVideo: function () {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: true,
      maxDuration: 18,
      success: (res) => {
        const filePath = res.tempFilePath
        wx.cloud.uploadFile({
          filePath,
          cloudPath: 'video/123.mov'
        }).then(res => {
          this.setData({ videoFileID: res.fileID })
        })
      }
    })
  },
  getTempURL: function () {
    const fileid = 'cloud://coderzsq-6vs6v.636f-coderzsq-6vs6v-1300753646/images/1574909702058_openid.png'
    wx.cloud.getTempFileURL({
      fileList: [fileid]
    }).then(res => {
      console.log(res)
    })
  },
  downloadVideoFile: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://coderzsq-6vs6v.636f-coderzsq-6vs6v-1300753646/video/123.mov'
    }).then(res => {
      console.log(res)
    })
  },
  deleteFile: function () {
    const fileID = 'cloud://coderzsq-6vs6v.636f-coderzsq-6vs6v-1300753646/video/123.mov'
    wx.cloud.deleteFile({
      fileList: [fileID]
    }).then(res => {
      console.log(res)
    })
  }
})