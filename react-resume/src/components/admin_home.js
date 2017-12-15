import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './admin_home.css';
import {GET, POST, URL} from '../utils/http';

@CSSModules(styles, {allowMultiple: true})
export default class AdminHome extends Component {

    constructor() {
        super();
        this.state = {
            profileImage: '',
            profileName: '',
            profileCareer: '',
            profileLocation: '',
            profileSocialList: [],
            profileInterestList: [],
            profileEducationList: []
        }
    }

    componentWillMount() {
        this.fetchProfile();
    }

    fetchProfile() {
        GET(URL.fetchProfile).then((data) => {
            this.setState(data)
            this.refsFillBack(data);
        })
    }

    updateProfile(key, value) {
        let formData = new FormData();
        formData.append(key, value);
        POST(URL.updateProfile, formData).then((data) => {
            alert("update success");
            this.fetchProfile();
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
        for (let index = 0, length = data.profileSocialList.length; index < length; index++) {
            refs[`src_${index}`].value = data.profileSocialList[index].src;
            refs[`href_${index}`].value = data.profileSocialList[index].href;
        }
        for (let index = 0, length = data.profileInterestList.length; index < length; index++) {
            refs[`interest_${index}`].value = data.profileInterestList[index].interest;
        }
        for (let index = 0, length = data.profileEducationList.length; index < length; index++) {
            refs[`major_${index}`].value = data.profileEducationList[index].major;
            refs[`school_${index}`].value = data.profileEducationList[index].school;
            refs[`year_${index}`].value = data.profileEducationList[index].year;
        }
    }

    updateProfileBind(input) {
        this.updateProfile(input.id, input.value);
    }

    insertSocialBind() {
        this.state.profileSocialList.push({src: '', href: ''});
        this.setState({profileSocialList: this.state.profileSocialList});
    }

    deleteSocialBind(index) {
        
    }

    render() {
        const data = this.state;
        let profileLocation = data.profileLocation.length
            ? `Location: ${data.profileLocation}`
            : '';
        let profileSocialList = data.profileSocialList.map((socialVo, index) => (
            <div key={index}>
                <a href={socialVo.href}><img src={socialVo.src} alt=""/></a>
            </div>
        ));
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
                        <button>done</button>
                        <button onClick={this.deleteSocialBind.bind(this, index)}>delete</button>
                    </div>
                </div>
            )
        });
        let profile_interest = data.profileInterestList.map((interestVo, index) => {
            let interest = `interest_${index}`;
            return (
                <div key={index}>
                    <div styleName="form-line">
                        <span>interest:</span>
                        <input type="text" ref={interest} autoComplete="off"/>
                        <button>done</button>
                        <button>delete</button>
                    </div>
                </div>
            )
        });
        let profile_education = data.profileEducationList.map((educationVo, index) => {
            let major = `major_${index}`;
            let school = `school_${index}`;
            let year = `year_${index}`;
            return (
                <div key={index}>
                    <div styleName="form-line">
                        <span>major:</span>
                        <input type="text" ref={major} autoComplete="off"/>
                        <span>school:</span>
                        <input type="text" ref={school} autoComplete="off"/>
                        <span styleName="year">year:</span>
                        <input type="text" ref={year} styleName="year" autoComplete="off"/>
                        <button>done</button>
                        <button>delete</button>
                    </div>
                </div>
            )
        });
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
                        <div styleName="options">
                            <span styleName="table">table: resume_profile</span>
                        </div>
                        <div styleName="form-line">
                            <span>profile_image:</span>
                            <input type="text" ref="profile_image" id="profile_image" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_image)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_name:</span>
                            <input type="text" ref="profile_name" id="profile_name" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_name)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_career:</span>
                            <input type="text" ref="profile_career" id="profile_career" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_career)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_location:</span>
                            <input type="text" ref="profile_location" id="profile_location" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_location)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_title:</span>
                            <input type="text" ref="profile_summary_title" id="profile_summary_title" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_summary_title)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_summary_description:</span>
                            <input type="text" ref="profile_summary_description" id="profile_summary_description" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_summary_description)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_interest_title:</span>
                            <input type="text" ref="profile_interest_title" id="profile_interest_title" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_interest_title)}>done</button>
                        </div>
                        <div styleName="form-line">
                            <span>profile_education_title:</span>
                            <input type="text" ref="profile_education_title" id="profile_education_title" autoComplete="off"/>
                            <button onClick={this.updateProfileBind.bind(this, this.refs.profile_education_title)}>done</button>
                        </div>
                    </div>
                    <div styleName="profile_social-block">
                        <div styleName="options">
                            <span styleName="table">table: resume_profile_social</span>
                            <button onClick={this.insertSocialBind.bind(this)}>add</button>
                        </div>
                        {profile_social}
                    </div>
                    <div styleName="profile_interest-block">
                        <div styleName="options">
                            <span styleName="table">table: resume_profile_interest</span>
                            <button>add</button>
                        </div>
                        {profile_interest}
                    </div>
                    <div styleName="profile_education-block">
                        <div styleName="options">
                            <span styleName="table">table: resume_profile_education</span>
                            <button>add</button>
                        </div>
                        {profile_education}
                    </div>
                </div>
            </div>
        )
    }
}
