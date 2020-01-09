// const b = require('./module/b.js')
/**
 * require: 如果我们require导入包的时候, 我们采用的是相对路径或者是绝对路径, 我们会根据对应的路径找到对应的文件
 * 但是如果只是导入文件名加后缀, 会去node_modules文件夹下面寻找同名的文件
 * 如果我们通过require导报的时候只是导入了文件名, 没有导入后缀名
 * 首先会去对应node_modules文件夹下面寻找同名的js文件, 如果同名的js文件不存在
 * 会把这个导入的名称作为一个文件夹, 去寻找这个文件夹下面的index.js文件
 * 加载index.js文件是因为我们配置文件package.json中有一个main的字段
 * main的这个字段决定了我们加载哪一个文件 
 */
const b = require('b')

console.log(b.msg)
// b.showInfo()

// console.log(b) // Castie!