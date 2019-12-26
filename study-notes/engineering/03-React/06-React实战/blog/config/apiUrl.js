let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', // 首页接口
  getArticleById: ipUrl + 'getArticleById/', // 详细页接口
  getTypeInfo: ipUrl + 'getTypeInfo', // 文章类别接口
  getListById: ipUrl + 'getListById/', // 根据类别ID获得文章列表
}

export default servicePath