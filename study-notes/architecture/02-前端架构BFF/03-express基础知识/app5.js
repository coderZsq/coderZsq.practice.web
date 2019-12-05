const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('form.ejs')
})

app.post('/', function (req, res) {
  res.send('success')
})

app.listen(3000)