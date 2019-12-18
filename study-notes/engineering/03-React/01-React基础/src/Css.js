import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Css extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() {
    return (
      <div>
        {/* <div className={this.state.isShow ? 'show' : 'hide'}>Boss级任务 - 孙悟空</div> */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames='boss-text'
          unmountOnExit
        >
          <div>Boss级任务 - 孙悟空</div>
        </CSSTransition>
        <div><button onClick={this.toToggole}>召唤Boss</button></div>
      </div>
    );
  }

  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true
    })
  }
}

export default Css;