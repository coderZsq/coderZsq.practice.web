import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_Index';
import MobileIndex from './components/mobile_Index';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
