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
                    </div>
                </div>
            </div>
        )
    }
}
