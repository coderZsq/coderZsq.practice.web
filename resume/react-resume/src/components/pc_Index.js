import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_Index.css';
import PCNavigation from './pc_navigation';
import PCHome from './pc_home';
import PCProjects from './pc_projects';
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
                <div id="home" styleName="odd">
                    <div styleName="content">
                        <PCHome/>
                    </div>
                </div>
                <div id="projects" styleName="even">
                    <div styleName="content">
                        <PCProjects/>
                    </div>
                </div>
                <div id="github" styleName="odd">
                    <div styleName="content">
                        <PCGithub/>
                    </div>
                </div>
                <div id="articles" styleName="even">
                    <div styleName="content">
                        <PCArticles/>
                    </div>
                </div>
                <div id="experience" styleName="odd">
                    <div styleName="content">
                        <PCExperience/>
                    </div>
                </div>
                <div id="contact" styleName="even">
                    <div styleName="content">
                        <PCContact/>
                    </div>
                </div>
                <iframe frameBorder="no" border="0" marginWidth="0" marginHeight="0" width="0" height="0" src="//music.163.com/outchain/player?type=2&id=528283&auto=1&height=32"></iframe>
            </div>
        )
    }
}
