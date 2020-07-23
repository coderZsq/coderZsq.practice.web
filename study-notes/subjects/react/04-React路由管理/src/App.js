import React, { PureComponent } from 'react'

import {
  NavLink,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import './App.css'

import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import User from './pages/user'
import NoMatch from './pages/noMatch'
import Login from './pages/login'
import Product from './pages/product'
import Detail from './pages/detail'

class App extends PureComponent {
  render() {
    const id = 'abc'

    return (
      <div>
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

        {/* 1.NavLink的使用 */}
        {/* <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }} > 首页</NavLink>
          <NavLink to="/about" activeStyle={{ color: "red", fontSize: "30px" }}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{ color: "red", fontSize: "30px" }}>我的</NavLink> */}

        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        <button onClick={e => this.jumpToProduct()}>商品</button>

        {/* 2.Switch组件的作用 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/:id" component={User} /> */}
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }

  jumpToProduct() {
    this.props.history.push('/product')
  }
}

export default withRouter(App)