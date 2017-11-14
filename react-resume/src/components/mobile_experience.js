import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_experience.css';
import MobileCareer from './mobile_career';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles)
export default class MobileExperience extends Component {

    constructor() {
        super();
        this.state = {
            careerList: [],
            profileEducationList: []
        }
    }

    componentWillMount() {
        GET(URL.fetchExperience).then((data) => {
            this.setState({careerList: data.careerList})
        })
        GET(URL.fetchProfile).then((data) => {
            this.setState({profileEducationList: data.profileEducationList})
        })
    }

    render() {
        const data = this.state;
        let careerList = data.careerList.map((careerVo, index) => (<MobileCareer key={index} time={careerVo.time} job={careerVo.job} corp={careerVo.corp} href={careerVo.href}/>))
        let profileEducationList = data.profileEducationList.map((educationVo, index) => (
            <dl key={index}>
                <dd>{educationVo.major}
                    - {educationVo.year}</dd>
                <dt>{educationVo.school}</dt>
            </dl>
        ))
        return (
            <div>
                <div styleName="subtitle">
                    <h2>Experience</h2>
                </div>
                {careerList}
                <div styleName="education">
                    <h2>Education</h2>
                    {profileEducationList}
                </div>
            </div>
        )
    }
}
