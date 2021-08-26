import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

export default function (app: App): void {
  registerElement(app)
  registerProperties(app)
}
