import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height } = props
  const { names } = props
  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

class ChildCpn2 extends Component {
  // es6中的 class fields写法
  static propTypes = {

  }

  static defaultProps = {

  }
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

ChildCpn.defaultProps = {
  name: 'coderZsq',
  age: 30,
  height: 1.98,
  name: ['aaa', 'bbb']
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="coderZsq" age={18} height={1.88} names={['abc', 'cba']} />
        <ChildCpn name="kobe" age={40} height={1.98} names={['nba', 'mba']} />
        <ChildCpn />
      </div>
    )
  }
}
