import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_home.css';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles, {allowMultiple: true})
export default class PCHome extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                profileImage: '',
                profileName: '',
                profileCareer: '',
                profileLocation: '',
                profileSocialList: [],
                profileSummaryTitle: '',
                profileSummaryDescription: '',
                profileInterestTitle: '',
                profileInterestList: [],
                profileEducationTitle: '',
                profileEducationList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchProfile).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let profileSummaryDescription = data.profileSummaryDescription.split('\\n').map((description, index) => (
            <p key={index}>{description}</p>
        ))
        let profileSocialList = data.profileSocialList.map((socialVo, index) => (
            <div key={index}>
                <a href={socialVo.href}><img src={socialVo.src} alt=""/></a>
            </div>
        ))
        let profileInterestList = data.profileInterestList.map((interestVo, index) => (
            <li key={index}># {interestVo.interest}</li>
        ))
        let profileEducationList = data.profileEducationList.map((educationVo, index) => (
            <dl key={index}>
                <dd>{educationVo.major} - {educationVo.year}</dd>
                <dt>{educationVo.school}</dt>
            </dl>
        ))
        return (
            <div>
                <div styleName="user">
                    <div styleName="user-block">
                        <div styleName="icon">
                            <img src={data.profileImage} alt=""/>
                        </div>
                        <div styleName="row name">
                            {data.profileName}
                        </div>
                        <div styleName="row career">
                            {data.profileCareer}
                        </div>
                        <div styleName="row location">
                            Location: {data.profileLocation}
                        </div>
                        <div styleName="row social">
                            <div styleName="indent"></div>
                            {profileSocialList}
                        </div>
                    </div>
                </div>
                <div styleName="introduction">
                    <div styleName="main">
                        <div styleName="main-block">
                            <h1>{data.profileSummaryTitle}</h1>
                            {profileSummaryDescription}
                        </div>
                    </div>
                    <div styleName="left">
                        <div styleName="left-block">
                            <h2>{data.profileInterestTitle}</h2>
                            <ul>{profileInterestList}</ul>
                        </div>
                    </div>
                    <div styleName="right">
                        <div styleName="right-block">
                            <h2>{data.profileEducationTitle}</h2>
                            {profileEducationList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
