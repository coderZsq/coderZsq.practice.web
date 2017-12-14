import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './admin_home.css';
import {GET, URL} from '../utils/http';

@CSSModules(styles, {allowMultiple: true})
export default class AdminHome extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                profileImage: '',
                profileName: '',
                profileCareer: '',
                profileLocation: '',
                profileSocialList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchProfile).then((data) => {
            this.setState({data: data})
            this.backfill(data);
        })
    }

    backfill(data) {
        let refs = this.refs;
        refs.profile_image.value = data.profileImage;
        refs.profile_name.value = data.profileName;
        refs.profile_career.value = data.profileCareer;
        refs.profile_location.value = data.profileLocation;
        refs.profile_summary_title.value = data.profileSummaryTitle;
        refs.profile_summary_description.value = data.profileSummaryDescription;
        refs.profile_interest_title.value = data.profileInterestTitle;
        refs.profile_education_title.value = data.profileEducationTitle;
    }

    render() {
        const {data} = this.state;
        let profileLocation = data.profileLocation.length
            ? `Location: ${data.profileLocation}`
            : ''
        let profileSocialList = data.profileSocialList.map((socialVo, index) => (
            <div key={index}>
                <a href={socialVo.href}><img src={socialVo.src} alt=""/></a>
            </div>
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
                            {profileLocation}
                        </div>
                        <div styleName="row social">
                            <div styleName="indent"></div>
                            {profileSocialList}
                        </div>
                    </div>
                </div>
                <div styleName="profile">
                    <div styleName="profile-block">
                        <div styleName="form-line">
                            <span>profile_image:</span>
                            <input type="text" ref="profile_image" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_name:</span>
                            <input type="text" ref="profile_name" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_career:</span>
                            <input type="text" ref="profile_career" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_location:</span>
                            <input type="text" ref="profile_location" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_title:</span>
                            <input type="text" ref="profile_summary_title" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_description:</span>
                            <input type="text" ref="profile_summary_description" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_interest_title:</span>
                            <input type="text" ref="profile_interest_title" autocomplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_education_title:</span>
                            <input type="text" ref="profile_education_title" autocomplete="off"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
