import hyRequest from '../../index'

export function getPageList(pageUrl: string, queryInfo: any) {
  return hyRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}

export function deletePageData(pageUrl: string) {
  return hyRequest.delete({
    url: pageUrl
  })
}

export function newPageData(pageUrl: string, newData: any) {
  return hyRequest.post({
    url: pageUrl,
    data: newData
  })
}

export function editPageData(pageUrl: string, editData: any) {
  return hyRequest.patch({
    url: pageUrl,
    data: editData
  })
}
