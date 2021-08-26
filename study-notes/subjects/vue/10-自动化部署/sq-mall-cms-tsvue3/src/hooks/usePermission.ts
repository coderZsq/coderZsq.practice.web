import { useStore } from '@/store'

export function usePermission(pageName: string, handle: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const handlePermission = `${pageName}:${handle}`
  return !!permissions.find((item) => item.indexOf(handlePermission) !== -1)
}
