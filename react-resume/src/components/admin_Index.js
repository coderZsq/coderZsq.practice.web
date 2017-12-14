import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './admin_Index.css';
import AdminNavigation from './admin_navigation';
import AdminHome from './admin_home';

@CSSModules(styles)
export default class AdminIndex extends Component {

    render() {
        return (
            <div>
                <AdminNavigation/>
                <div styleName="odd">
                    <div styleName="content">
                        <AdminHome/>
                    </div>
                </div>
                <div styleName="even">
                    <div styleName="content">

                    </div>
                </div>
                <div styleName="odd">
                    <div styleName="content">

                    </div>
                </div>
                <div styleName="even">
                    <div styleName="content">

                    </div>
                </div>
                <div styleName="odd">
                    <div styleName="content">
                    </div>
                </div>
                <div styleName="even">
                    <div styleName="content">
                    </div>
                </div>
            </div>
        )
    }
}
