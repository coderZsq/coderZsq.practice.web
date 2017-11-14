import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_projects.css';
import MobileProject from './mobile_project';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles)
export default class MobileProjects extends Component {

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
            <MobileProject key={index} src={projectsVo.src} href={projectsVo.href} name={projectsVo.name} description={projectsVo.description}/>
        ))
        return (
            <div>
                <div styleName="subtitle">
                    <h2>Projects</h2>
                </div>
                {projectList}
            </div>
        )
    }
}
