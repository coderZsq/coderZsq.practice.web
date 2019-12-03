const express = require('express')
const fs = require('fs')
const blueBird = require('bluebird')
const app = express()

function mypromisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      fn.apply(null, [...args, function (err, data) {
        err ? reject(err) : resolve(data)
      }])
    })
  }
}
mypromisify(fs.readFile)('./promise.js', 'utf8').then(function (data) {
  console.log(data)
})

let myReadFile = blueBird.promisify(fs.readFile)
myReadFile('./promise.js', 'utf8').then(function (data) {
  console.log(data)
})

app.get('/', function (req, res) {
  fs.readFile('./promise.js', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    fs.readFile('add' + data, function (err, data) {

    })
    console.log(data)
  })
})

app.listen(3001)