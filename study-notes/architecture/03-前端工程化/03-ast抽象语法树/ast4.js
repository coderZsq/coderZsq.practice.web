// import { flatten, join } from 'lodash'
// import flatten from 'lodash/flatten'
// import join from 'lodash/join'

const babel = require('babel-core')
const types = require('babel-types')

let visitor = {

}

let code = `import { flatten, join } from 'lodash'`

let result = babel.transform(code, {
  plugins: [{ visitor }]
})