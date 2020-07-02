// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID, // 当前用户在小程序中唯一标识
    appid: wxContext.APPID, // 小程序的唯一标识
    unionid: wxContext.UNIONID, // 不是任意小程序都可以获取 (不可以标识出用户在多个我们的平台使用微信登录)
  }
}