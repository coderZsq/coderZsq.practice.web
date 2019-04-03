import React from 'react';
import {HashRouter, Route, Link} from "react-router-dom";
import {Layout, Menu} from 'antd';
const {Header, Content, Footer} = Layout;
import styles from './css/app.scss';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return <HashRouter>
            <Layout className="layout">
                <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                {/* 中间的 内容区域 */}
                <Content style={{ backgroundColor: '#fff', flex: 1 }}>
                    {/*<Route path="/home" component={HomeContainer}></Route>*/}
                    {/*<Route path="/movie" component={MovieContainer}></Route>*/}
                    {/*<Route path="/about" component={AboutContainer}></Route>*/}
                </Content>

                {/* Footer 底部区域 */}
                <Footer style={{ textAlign: 'center' }}>
                    Castie! ©2019
                </Footer>
            </Layout>
        </HashRouter>
    }
}