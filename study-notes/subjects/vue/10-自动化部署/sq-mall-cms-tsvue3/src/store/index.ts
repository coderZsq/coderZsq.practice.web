import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState } from './types'
import type { IStore } from './types'

import { getPageList } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'
import analysis from './main/analysis/analysis'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {
    changeEntireRoles(state, entireRoles) {
      state.entireRoles = entireRoles
    },
    changeEntireDepartments(state, entireDepartments) {
      state.entireDepartments = entireDepartments
    },
    changeEntireMenus(state, entireMenus) {
      state.entireMenus = entireMenus
    }
  },
  actions: {
    async getInitalDataAction({ commit }) {
      const { list: entireRoles } = await getPageList('/role/list', { offset: 0, size: 100 })
      const { list: entireDepartments } = await getPageList('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: entireMenus } = await getPageList('/menu/list', {})
      commit('changeEntireRoles', entireRoles)
      commit('changeEntireDepartments', entireDepartments)
      commit('changeEntireMenus', entireMenus)
    }
  },
  modules: {
    login,
    system,
    analysis
  }
})

// store.state.login.token

export function useStore(): Store<IStore> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/loadLocalCache')
  // store.dispatch('getInitalDataAction')
}

export default store
