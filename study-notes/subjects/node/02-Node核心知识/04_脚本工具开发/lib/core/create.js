const program = require('commander')

const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
} = require('./actions')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component, 例如: sq addcpn HelloWorld [-d src/components]')
    .action((name) => {
      addComponentAction(name, program.dest || 'src/components')
    })
  program
    .command('addpage <page>')
    .description('add vue page and router config, 例如: sq addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.dest || 'src/pages')
    })
  program
    .command('addstore <store>')
    .description('add vue page and router config, 例如: sq addpage Home [-d src/pages]')
    .action((page) => {
      addStoreAction(page, program.dest || 'src/store/modules')
    })
}

module.exports = createCommands