import { App } from 'vue'
import { utcToDateTimeFormat } from '@/utils/date-formt'

function registerGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    showStatus(enable: boolean) {
      return enable ? '启用' : '禁用'
    },
    formatTime(value: string) {
      return utcToDateTimeFormat(value)
    }
  }
  app.config.globalProperties.form
}

export default registerGlobalProperties
