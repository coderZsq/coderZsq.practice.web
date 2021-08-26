import { Module } from 'vuex'
import { ISystemState, IPagePayload } from './types'
import { IRootState } from '../../types'

import {
  getPageList,
  deletePageData,
  newPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersTotalCount: 0,
      usersList: [],
      departmentTotalCount: 0,
      departmentList: [],
      roleTotalCount: 0,
      roleList: [],
      menuList: [],
      categoryTotalCount: 0,
      categoryList: [],
      goodsTotalCount: 0,
      goodsList: [],
      storyTotalCount: 0,
      storyList: []
    }
  },
  mutations: {
    changeUsersTotalCount(state, totalCount: number) {
      state.usersTotalCount = totalCount
    },
    changeUsersList(state, userList: any) {
      state.usersList = userList
    },
    changeDepartmentTotalCount(state, totalCount: number) {
      state.departmentTotalCount = totalCount
    },
    changeDepartmentList(state, departmentList: any) {
      state.departmentList = departmentList
    },
    changeRoleTotalCount(state, totalCount: number) {
      state.roleTotalCount = totalCount
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    },
    changeCategoryTotalCount(state, totalCount: number) {
      state.categoryTotalCount = totalCount
    },
    changeCategoryList(state, roleList: any) {
      state.categoryList = roleList
    },
    changeGoodsTotalCount(state, totalCount: number) {
      state.goodsTotalCount = totalCount
    },
    changeGoodsList(state, roleList: any) {
      state.goodsList = roleList
    },
    changeStoryTotalCount(state, totalCount: number) {
      state.storyTotalCount = totalCount
    },
    changeStoryList(state, storyList: any) {
      state.storyList = storyList
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const listData: any[] = (state as any)[`${pageName}List`] ?? []
        return listData
      }
    },
    pageListDataCount(state) {
      return (pageName: string) => {
        const listCount = (state as any)[`${pageName}TotalCount`] ?? 0
        return listCount
      }
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: IPagePayload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      if (pageUrl.length === 0) return
      const { totalCount, list } = await getPageList(pageUrl, payload.queryInfo)

      switch (payload.pageName) {
        case 'users':
          commit('changeUsersTotalCount', totalCount)
          commit('changeUsersList', list)
          break
        case 'department':
          commit('changeDepartmentTotalCount', totalCount)
          commit('changeDepartmentList', list)
          break
        case 'role':
          commit('changeRoleTotalCount', totalCount)
          commit('changeRoleList', list)
          break
        case 'menu':
          commit('changeMenuList', list)
          break
        case 'category':
          commit('changeCategoryTotalCount', totalCount)
          commit('changeCategoryList', list)
          break
        case 'goods':
          commit('changeGoodsTotalCount', totalCount)
          commit('changeGoodsList', list)
          break
        case 'story':
          commit('changeStoryTotalCount', totalCount)
          commit('changeStoryList', list)
          break
      }
    },

    async deletePageDataAction({ dispatch }, payload: IPagePayload) {
      const pageName = payload.pageName
      const deleteId = payload.id
      if (!deleteId) return
      const pageUrl = `/${pageName}/${deleteId}`
      await deletePageData(pageUrl)
      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },

    async newPageDataAction({ dispatch }, payload: IPagePayload) {
      const pageUrl = `/${payload.pageName}`
      const pageData = payload.queryInfo
      await newPageData(pageUrl, pageData)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },

    async editPageDataAction({ dispatch }, payload: IPagePayload) {
      if (!payload.id) return
      const pageUrl = `/${payload.pageName}/${payload.id}`
      const pageData = payload.queryInfo
      await editPageData(pageUrl, pageData)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    }
  }
}

export default systemModule
