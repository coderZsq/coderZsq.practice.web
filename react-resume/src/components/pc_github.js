import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_github.css';
import PCTarget from './pc_target';

@CSSModules(styles)
export default class PCGithub extends Component {

    render() {
        return (
            <div>
                <div styleName="subtitle">
                    <h1>GitHub</h1>
                </div>
                <div styleName="github">
                    <div styleName="github-block">
                        <PCTarget name="coderZsq.project.oc" description="Use the SQExtension & SQTemplate to quickly build a project architecture, quickly use wheel components, and quickly integrate animated effects." href="https://github.com/coderZsq/coderZsq.project.oc" color="#438eff" language="Objective-C" star="115"/>
                        <PCTarget name="coderZsq.target.swift" description="Learn the advanced path of Swift Including Hybrid, RxSwift, Animations, SpriteKit, SceneKit, CoreData, LLDB, iOS, watchOS, tvOS etc." href="https://github.com/coderZsq/coderZsq.target.swift" color="#ffac45" language="Swift" star="4"/>
                        <PCTarget name="coderZsq.display.js" description="Through Vue.js to build a personal resume, hope that most companies to discuss cooperation." href="https://github.com/coderZsq/coderZsq.display.js" color="#E34C26" language="HTML" star="0"/>
                        <PCTarget name="coderZsq.github.io" description="Through Hexo to build a personal blog, hoping to leave a good memory moments with you." href="https://github.com/coderZsq/coderZsq.github.io" color="#563D7C" language="CSS" star="1"/>
                    </div>
                </div>
            </div>
        )
    }
}
