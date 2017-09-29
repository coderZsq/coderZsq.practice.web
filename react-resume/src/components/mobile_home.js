import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_home.css';

@CSSModules(styles, {allowMultiple: true})
export default class MobileHome extends Component {

    render() {
        return (
            <div>
                <div styleName='icon'>
                    <img src="http://upload-images.jianshu.io/upload_images/1229762-23e162b9bd6b9c39.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                </div>
                <div styleName="summary">
                    <h1>Summary</h1>
                    <p>Shuangquan Zhu is a professional developer who focuses on iOS now. He has strong knowledge of Objective-C, Swift and Javascript. With these skills, he created quite a few quickly developer tools. He also leads the J1 iOS team to promote the project process.
                    </p>
                    <p>He crazy loves playing basketball with friends in spare time, He also loves traveling, writing and listening music. He is always willing to try new things, and keeping to learn from them.</p>
                </div>
            </div>
        )
    }
}
