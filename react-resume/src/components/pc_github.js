import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_github.css';
import PCTarget from './pc_target';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles)
export default class PCGithub extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                targetList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchGitHub).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let targetList = data.targetList.map((targetVo, index) => (
            <PCTarget key={index} name={targetVo.name} description={targetVo.description} href={targetVo.href} color={targetVo.color} language={targetVo.language} star={targetVo.star}/>
        ))
        return (
            <div>
                <div styleName="subtitle">
                    <h1>GitHub</h1>
                </div>
                <div styleName="github">
                    <div styleName="github-block">
                        {targetList}
                        {/* <PCTarget name="coderZsq.project.oc" description="A lightweight and efficient application development tool set for iOS, and accelerating the developing speed." href="https://github.com/coderZsq/coderZsq.project.oc" color="#438eff" language="Objective-C" star="141"/>
                        <PCTarget name="coderZsq.target.swift" description="For advanced Swift development technology pre-research & ideas & practice. ( Focus areas: App )" href="https://github.com/coderZsq/coderZsq.target.swift" color="#ffac45" language="Swift" star="9"/>
                        <PCTarget name="coderZsq.webpack.js" description="For advanced JavaScript development technology pre-research & ideas & practice. ( Focus areas: Web )" href="https://github.com/coderZsq/coderZsq.display.js" color="#EFDF70" language="JavaScript" star="1"/>
                        <PCTarget name="coderZsq.github.io" description="Through github.io to build a personal blog, has been off the shelf, when the shelves to inform." href="https://github.com/coderZsq/coderZsq.github.io" color="#563D7C" language="CSS" star="1"/> */}
                    </div>
                </div>
            </div>
        )
    }
}
