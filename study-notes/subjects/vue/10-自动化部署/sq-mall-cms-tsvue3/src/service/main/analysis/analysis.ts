import hyRequest from '../../index'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export function getAmountList() {
  return hyRequest.get({
    url: AnalysisAPI.amountList
  })
}

export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: AnalysisAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: AnalysisAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: AnalysisAPI.categoryGoodsFavor
  })
}

export function getGoodsSaleTop10() {
  return hyRequest.get({
    url: AnalysisAPI.goodsSaleTop10
  })
}

export function getGoodsAddressSale() {
  return hyRequest.get({
    url: AnalysisAPI.goodsAddressSale
  })
}
