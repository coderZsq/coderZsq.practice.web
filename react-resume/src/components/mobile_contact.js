import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_contact.css';

@CSSModules(styles)
export default class MobileContact extends Component {

    render() {
        return (
            <div>
                <div styleName="subtitle">
                    <h2>Contact</h2>
                </div>
                <div styleName="contact">
                    <div styleName="wechat">
                        <img src="http://upload-images.jianshu.io/upload_images/1229762-453920a3f4eedcd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                    </div>
                    <div styleName="other">
                        <h4>Other contact info:</h4>
                        <p>Mobile: +86 13701777868</p>
                        <p>QQ: 120709684</p>
                        <p>@copyright Castie!</p>
                    </div>
                </div>
            </div>
        )
    }
}
