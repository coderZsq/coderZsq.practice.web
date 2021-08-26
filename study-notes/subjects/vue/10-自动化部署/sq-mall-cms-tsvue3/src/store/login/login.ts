import type { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

import router from '@/router'

import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'
import localCache from '@/utils/cache'
import { menuMapToRoutes, menuMapToPermissions } from '@/utils/map-menu'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 根据菜单映射路由
      const routes = menuMapToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 检查按钮的权限
      const permissions = menuMapToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, account: { name: string; password: string }) {
      // 1.用户登录
      const loginResult = await accountLoginRequest(account)
      const { id, token } = loginResult
      console.log(id, token)
      commit('saveToken', token)
      localCache.setCache('token', token)

      // 2.获取用户信息
      const userInfo = await getUserById(id)
      console.log(userInfo)
      commit('saveUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.用户菜单树
      const userMenus = await getUserMenus(userInfo.role.id)
      console.log(userMenus)
      commit('saveUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.请求完全的角色和部门
      dispatch('getInitalDataAction', null, { root: true })

      // 跳转到首页
      router.push('/main')
    },
    loadLocalCache({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('saveToken', token)
        dispatch('getInitalDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    }
  }
}

export default login
