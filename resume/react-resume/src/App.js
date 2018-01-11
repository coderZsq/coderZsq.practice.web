import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_Index';
import MobileIndex from './components/mobile_Index';
import AdminIndex from './components/admin_Index';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={PCIndex}></Route>
                            <Route path="/admin" component={AdminIndex}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
