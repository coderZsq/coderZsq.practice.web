import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IAnalysis } from './main/analysis/types'

export interface IRootState {
  name: string
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

export interface IRootAndLogin {
  login: ILoginState
  system: ISystemState
  analysis: IAnalysis
}

export type IStore = IRootState & IRootAndLogin
