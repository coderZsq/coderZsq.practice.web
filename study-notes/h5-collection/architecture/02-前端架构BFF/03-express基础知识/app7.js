const express = require('express')
const url = require('url')
const app = express()

app.get('/admin', function (req, res) {
  // console.log(query)

  let { pathname, query } = url.parse(req.url, true)
  console.log(req.query)
  res.send()
})

app.listen(3000)