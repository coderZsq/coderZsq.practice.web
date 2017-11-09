import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_home.css';
import {GET, URL} from '../javascripts/http';

@CSSModules(styles, {allowMultiple: true})
export default class PCHome extends Component {

    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    componentWillMount() {
        GET(URL.fetchProfile).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let profileSummaryDescription = '';
        if (typeof(data.profileSummaryDescription) === 'string') {
            profileSummaryDescription = data.profileSummaryDescription
            .split('\\n')
            .map((description, index) => (
                <p key={index}>{description}</p>
            ))
        }

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
                            {data.profileLocation}
                        </div>
                        <div styleName="row social">
                            <div styleName="indent"></div>
                            <div>
                                <a href="https://github.com/coderzsq"><img src="http://upload-images.jianshu.io/upload_images/1229762-877e3e5c2260bcf1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/></a>
                            </div>
                            <div>
                                <a href="http://www.jianshu.com/u/9d7fad1a4693"><img src="http://upload-images.jianshu.io/upload_images/1229762-f6525252f3e8387b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/></a>
                            </div>
                            <div>
                                <a href="http://upload-images.jianshu.io/upload_images/1229762-453920a3f4eedcd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"><img src="http://upload-images.jianshu.io/upload_images/1229762-a69614a97de93f36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/></a>
                            </div>
                            <div>
                                <a href="http://coderzsq.github.io/"><img src="http://upload-images.jianshu.io/upload_images/1229762-91b0949aec719aab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/></a>
                            </div>
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
                            <ul>
                                <li># Learn about high tech</li>
                                <li># Play basketball</li>
                                <li># Listen to music</li>
                                <li># Apple products</li>
                            </ul>
                        </div>
                    </div>
                    <div styleName="right">
                        <div styleName="right-block">
                            <h2>{data.profileEducationTitle}</h2>
                            <dl>
                                <dd>Business Management - 2016</dd>
                                <dt>East China University of Science and Technology</dt>
                            </dl>
                            <dl>
                                <dd>Customs and International Freight - 2013</dd>
                                <dt>Shanghai Maritime Academy</dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
