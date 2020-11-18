const { promisify } = require('util')
const path = require('path')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')

// callback -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
  console.log('sq helps you create your project~')

  // 1. clone项目 $ npm install download-git-repo
  await download(vueRepo, project, { clone: true })

  // 2. 执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3. 运行npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

  // 4. 打开浏览器
  open('http://localhost:8080')
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1. 编译ejs模块 result
  const result = await compile('component.vue.ejs', { name, lowerName: name.toLowerCase() })

  // 2. 写入文件的操作
  const targetPath = path.resolve(dest, `${name}.vue`)
  writeToFile(targetPath, result)
}

// 添加组件和路由
const addPageAndRouteAction = async (name, dest) => {
  // 1. 编译ejs模板
  const data = { name, lowerName: name.toLowerCase() }
  const pageResult = await compile('component.vue.ejs', data)
  const routeResult = await compile('vue-router.js.ejs', data)

  // 2. 写入文件
  const targetDest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.vue`)
    const targetRoutePath = path.resolve(targetDest, 'router.js')
    writeToFile(targetPagePath, pageResult)
    writeToFile(targetRoutePath, routeResult)
  }
}

const addStoreAction = async (name, dest) => {
  // 1. 编译的过程
  const storeResult = await compile('vue-store.js.ejs', {})
  const typesResult = await compile('vue-types.js.ejs', {})

  // 2. 创建文件
  const targetDest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(targetDest)) {
    const targetStorePath = path.resolve(targetDest, 'index.js')
    const targetTypesPath = path.resolve(targetDest, 'types.js')
    writeToFile(targetStorePath, storeResult)
    writeToFile(targetTypesPath, typesResult)
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
}