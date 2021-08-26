import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

let firstMenu: any = undefined
let firstRoute: RouteRecordRaw | undefined = undefined

export function menuMapToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.读取本地所有的路由
  const localRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    if (key.indexOf('./main.ts') !== -1) return
    const route = require('../router/main' + key.split('.')[1])
    localRoutes.push(route.default)
  })

  // 2.菜单的映射
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute && !firstMenu) {
          firstMenu = menu
          firstRoute = route
        }
      } else {
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function mapPathToBreadpaths(currentPath: string, userMenus: any[]) {
  const breadPaths: IBreadcrumb[] = []

  const _recurseGetPath = (menus: any[]): any => {
    for (const menu of menus) {
      if (menu.type === 1) {
        const foundMenu = _recurseGetPath(menu.children)
        if (foundMenu) {
          breadPaths.push({ name: menu.name, path: menu.url })
        }
      } else if (menu.type === 2 && menu.url === currentPath) {
        breadPaths.push({ name: menu.name, path: menu.url })
        return menu
      }
    }
  }

  _recurseGetPath(userMenus)

  return breadPaths.reverse()
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: '/' })
        breadcrumbs?.push({ name: findMenu.name, path: '/' })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 根据菜单获取所有的按钮权限
export function menuMapToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export function getMenuChecks(menuList: any[]): number[] {
  const checks: number[] = []
  const _recurseGetChecked = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetChecked(menu.children)
      } else {
        checks.push(menu.id)
      }
    }
  }
  _recurseGetChecked(menuList)
  return checks
}

export { firstMenu, firstRoute }
