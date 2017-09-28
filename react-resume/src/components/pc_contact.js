import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_contact.css';

@CSSModules(styles)
export default class PCContact extends Component {

    render() {
        return (
            <div>
                <div styleName="subtitle">
                    <h1>Contact</h1>
                </div>
                <div styleName="contact">
                    <div styleName="contact-block">
                        <div styleName="wechat">
                            <img src="http://upload-images.jianshu.io/upload_images/1229762-453920a3f4eedcd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                            <p>Wechat: Aquas008</p>
                        </div>
                        <div styleName="other">
                            <h3>Other contact info:</h3>
                            <p>Mobile: +086 13701777868</p>
                            <p>Email: a13701777868@sina.com / a13701777868@gmail.com</p>
                            <p>QQ: 120709684</p>
                            <p>Please feel free contact for appointment</p>
                            <p>@copyright Castie!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
