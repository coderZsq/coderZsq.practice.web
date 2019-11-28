// 云函数入口文件
const cloud = require('wx-server-sdk')
// ES6 对象的解构
// const utils = require('wx-js-utils')
// const WXMINIUser = utils.WXMINIUser
// const WXMINIQR = utils.WXMINIQR
const { WXMINIUser, WXMINIQR } = require('wx-js-utils')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 1. 获取 access_token

  // 2. 获取小程序码

  // 3. 将小程序码的图片上传到云存储中
}