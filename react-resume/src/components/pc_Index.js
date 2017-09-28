import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_Index.css';
import PCNavigation from './pc_navigation';
import PCHome from './pc_home';
import PCProducts from './pc_projects';
import PCGithub from './pc_github';

@CSSModules(styles)
export default class PCIndex extends Component {

    render() {
        return (
            <div>
                <PCNavigation/>
                <div styleName="odd">
                    <div styleName="content">
                        <PCHome/>
                    </div>
                </div>
                <div styleName="even">
                    <div styleName="content">
                        <PCProducts/>
                    </div>
                </div>
                <div styleName="odd">
                    <div styleName="content">
                        <PCGithub/>
                    </div>
                </div>
                <div styleName="articles">
                    <div styleName="content">
                    </div>
                </div>
                <div styleName="odd">
                    <div styleName="content">
                    </div>
                </div>
                <div styleName="contact">
                    <div styleName="content">
                    </div>
                </div>
            </div>
        )
    }
}
