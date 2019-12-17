import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      // JSX
      <ul className="my-list">
        <li>{false ? 'coderZsq' : 'Castiel'}</li>
        <li>I Love React</li>
      </ul>
    )
    // var child1 = React.createElement('li', null, 'coderZsq')
    // var child2 = React.createElement('li', null, 'I Love React')
    // var root = React.createElement('ul', { className: 'my-list' })
  }
}

export default App