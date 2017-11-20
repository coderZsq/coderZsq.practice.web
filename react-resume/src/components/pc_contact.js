import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_contact.css';
import {GET, URL} from '../utils/http';

@CSSModules(styles)
export default class PCContact extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                wechatUrl: '',
                wechat: '',
                mobile: '',
                email: '',
                qq: ''
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchContact).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <div styleName="subtitle">
                    <h1>Contact</h1>
                </div>
                <div styleName="contact">
                    <div styleName="contact-block">
                        <div styleName="wechat">
                            <img src={data.wechatUrl} alt=""/>
                            <p>Wechat: {data.wechat}</p>
                        </div>
                        <div styleName="other">
                            <h3>Other contact info:</h3>
                            <p>Mobile: {data.mobile}</p>
                            <p>Email: {data.email}</p>
                            <p>QQ: {data.mobile}</p>
                            <p>Please feel free contact for appointment</p>
                            <p>@copyright Castie!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
