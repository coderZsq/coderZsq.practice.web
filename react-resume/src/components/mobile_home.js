import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_home.css';
import {GET, URL} from '../utils/http';

@CSSModules(styles, {allowMultiple: true})
export default class MobileHome extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                profileImage: '',
                profileSummaryTitle: '',
                profileSummaryDescription: ''
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
        return (
            <div>
                <div styleName='icon'>
                    <img src={data.profileImage} alt=""/>
                </div>
                <div styleName="summary">
                    <h1>{data.profileSummaryTitle}</h1>
                    {profileSummaryDescription}
                </div>
            </div>
        )
    }
}
