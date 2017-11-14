import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_experience.css';
import PCCareer from './pc_career';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles)
export default class PCExperience extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                careerList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchExperience).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let careerList = data.careerList.map((careerVo, index) => (
            <PCCareer key={index} time={careerVo.time} job={careerVo.job} corp={careerVo.corp} href={careerVo.href} desc1={careerVo.desc1} desc2={careerVo.desc2} desc3={careerVo.desc3}/>
        ))
        return (
            <div>
                <div styleName="subtitle">
                    <h1>Experience</h1>
                </div>
                <div styleName="experience">
                    <div styleName="experience-block">
                        {careerList}
                    </div>
                </div>
            </div>
        )
    }
}
