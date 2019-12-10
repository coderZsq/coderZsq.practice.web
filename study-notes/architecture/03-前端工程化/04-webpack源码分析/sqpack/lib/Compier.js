const { SyncHook } = require('tapable')

class Compier {
  constructor(options) {
    this.options = options
    this.hook = {
      entryOption: new SyncHook(['config'])
    }
    let { entry, output: { path: dist, filename } } = this.options
    let plugins = this.options.plugins
    if (plugins && plugins.length > 0) {
      plugins.forEach(plugin => {
        plugin.apply()
      })
    }
  }
}