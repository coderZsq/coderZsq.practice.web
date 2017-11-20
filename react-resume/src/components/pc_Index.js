import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_Index.css';
import PCNavigation from './pc_navigation';
import PCHome from './pc_home';
import PCProducts from './pc_projects';
import PCGithub from './pc_github';
import PCArticles from './pc_articles';
import PCExperience from './pc_experience';
import PCContact from './pc_contact';

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
                <div styleName="even">
                    <div styleName="content">
                        <PCArticles/>
                    </div>
                </div>
                <div styleName="odd">
                    <div styleName="content">
                        <PCExperience/>
                    </div>
                </div>
                <div styleName="even">
                    <div styleName="content">
                        <PCContact/>
                    </div>
                </div>
            </div>
        )
    }
}
