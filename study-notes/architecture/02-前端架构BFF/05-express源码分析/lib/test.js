const express = require('./express.js')
const app = express()

app.get('/', function (req, res) {
  res.end('test')
})

app.listen(3000)