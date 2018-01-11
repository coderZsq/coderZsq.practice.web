import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './admin_navgation.css';

@CSSModules(styles)
export default class AdminNavigation extends Component {

    render() {
        return (
            <div>
                <div styleName="nav">
                    <div styleName="content">
                        <div styleName="title">
                            Castie!
                            <span>admin</span>
                        </div>
                        <div styleName="items">
                            <span>
                                <a>Home</a>
                            </span>
                            <span>
                                <a>Projects</a>
                            </span>
                            <span>
                                <a>GitHub</a>
                            </span>
                            <span>
                                <a>Articles</a>
                            </span>
                            <span>
                                <a>Experience</a>
                            </span>
                            <span>
                                <a>Contact</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div styleName="nav-offset"></div>
            </div>
        )
    }
}
