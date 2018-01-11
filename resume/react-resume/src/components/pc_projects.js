import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_products.css';
import PCProduct from './pc_project';
import {GET, URL} from '../utils/http';

@CSSModules(styles)
export default class PCProducts extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                projectList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchProjects).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let projectList = data.projectList.map((projectsVo, index) => (
            <PCProduct key={index} src={projectsVo.src} href={projectsVo.href} name={projectsVo.name} description={projectsVo.description} text1={projectsVo.text1} text2={projectsVo.text2} text3={projectsVo.text3}/>
        ))
        return (
            <div>
                <div styleName="subtitle">
                    <h1>Projects</h1>
                </div>
                <div styleName="projects">
                    <div styleName="projects-block">
                        {projectList}
                    </div>
                </div>
            </div>
        )
    }
}
