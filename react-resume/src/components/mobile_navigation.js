import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_navigation.css';

@CSSModules(styles)
export default class MobileNavigation extends Component {
    render() {
        return (
            <div>
                <div styleName="nav">
                    <div styleName="title">
                        Castie!
                    </div>
                </div>
                <div styleName="nav-offset"></div>
            </div>
        )
    }
}
