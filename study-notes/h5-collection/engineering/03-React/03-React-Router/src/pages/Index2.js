import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: 'coderZsq.github.io - 1' },
        { cid: 456, title: 'coderZsq.github.io - 2' },
        { cid: 789, title: 'coderZsq.github.io - 3' }
      ]
    }
    this.props.history.push("/home/")
  }
  render() {
    return (
      <div>
        {/* <Redirect to="/home/" /> */}
        <h2>Castie!</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;