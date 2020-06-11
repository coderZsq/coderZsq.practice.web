// 云函数入口文件
const cloud = require('wx-server-sdk')
const { WXMINIUser, WXMINIMessage } = require('wx-js-utils')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 1. 获取 access_token
  const user = new WXMINIUser({
    appId: 'wx5457a45675ff3fe7',
    secret: 'ec0bb7ed7129a95e529dbc998868bc65'
  })
  const access_token = await user.getAccessToken()

  // 2. 获取参数, 发送消息模板
  const template_id = 'YrwNv6iKfs0XcdpU9wKLkbswbeOXs5R-TojKOln60CU'
  const touser = cloud.getWXContext().OPENID
  const form_id = event.formId;

  let wXMINIMessage = new WXMINIMessage()
  const result = await wXMINIMessage.sendMessage({
    access_token,
    touser,
    form_id,
    template_id,
    data: {
      keyword1: {
        value: '支付宝'
      },
      keyword2: {
        value: '2019-12-02'
      },
      keyword3: {
        value: '¥999999999.99'
      },
      keyword4: {
        value: '13701777868'
      },
      keyword5: {
        value: 'SSSSSSSSSVIP'
      },
      keyword6: {
        value: '已达上限!'
      }
    }
  })
  return result
}