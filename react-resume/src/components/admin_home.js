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
                profileSocialList: [],
                profileInterestList: [],
                profileEducationList: []
            },
            profile_social: ''
        }
    }

    componentWillMount() {
        GET(URL.fetchProfile).then((data) => {
            this.setState({data: data})
            this.refsFillBack(data);
        })
    }

    refsFillBack(data) {
        let refs = this.refs;
        refs.profile_image.value = data.profileImage;
        refs.profile_name.value = data.profileName;
        refs.profile_career.value = data.profileCareer;
        refs.profile_location.value = data.profileLocation;
        refs.profile_summary_title.value = data.profileSummaryTitle;
        refs.profile_summary_description.value = data.profileSummaryDescription;
        refs.profile_interest_title.value = data.profileInterestTitle;
        refs.profile_education_title.value = data.profileEducationTitle;
        for (var index = 0, length = data.profileSocialList.length; index < length; index++) {
            refs[`src_${index}`].value = data.profileSocialList[index].src;
            refs[`href_${index}`].value = data.profileSocialList[index].href;
        }
        for (var index = 0, length = data.profileInterestList.length; index < length; index++) {
            refs[`interest_${index}`].value = data.profileInterestList[index].interest;
        }
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
        let profile_social = data.profileSocialList.map((socialVo, index) => {
            let src = `src_${index}`;
            let href = `href_${index}`;
            return (
                <div key={index}>
                    <div styleName="form-line">
                        <span>src:</span>
                        <input type="text" ref={src} autoComplete="off"/>
                        <span>href:</span>
                        <input type="text" ref={href} autoComplete="off"/>
                    </div>
                </div>
            )
        })
        let profile_interest = data.profileInterestList.map((interestVo, index) => {
            let interest = `interest_${index}`;
            return (
                <div key={index}>
                    <div styleName="form-line">
                        <span>interest:</span>
                        <input type="text" ref={interest} autoComplete="off"/>
                    </div>
                </div>
            )
        })
        let profileEducationList = data.profileEducationList.map((educationVo, index) => {
            return (
                <div key={index}>
                    <div styleName="form-line">
                        <span>interest:</span>
                        <input type="text" autoComplete="off"/>
                    </div>
                </div>
            )
        }

        )
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
                            <input type="text" ref="profile_image" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_name:</span>
                            <input type="text" ref="profile_name" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_career:</span>
                            <input type="text" ref="profile_career" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_location:</span>
                            <input type="text" ref="profile_location" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_title:</span>
                            <input type="text" ref="profile_summary_title" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_description:</span>
                            <input type="text" ref="profile_summary_description" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_interest_title:</span>
                            <input type="text" ref="profile_interest_title" autoComplete="off"/>
                        </div>
                        <div styleName="form-line">
                            <span>profile_education_title:</span>
                            <input type="text" ref="profile_education_title" autoComplete="off"/>
                        </div>
                    </div>
                    <div styleName="profile_social-block">
                        {profile_social}
                    </div>
                    <div styleName="profile_interest-block">
                        {profile_interest}
                    </div>
                </div>
            </div>
        )
    }
}
