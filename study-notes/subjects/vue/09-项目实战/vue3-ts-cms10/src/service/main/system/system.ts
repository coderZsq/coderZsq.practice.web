import sqRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return sqRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
