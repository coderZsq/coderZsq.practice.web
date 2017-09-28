import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_home.css';

class PCHome extends Component {

    render() {
        return (
            <div>
                <div styleName="user">
                    <div styleName="user-block">
                        <div styleName="icon">
                            <img src="http://upload-images.jianshu.io/upload_images/1229762-23e162b9bd6b9c39.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        </div>
                        <div styleName="row name">
                            Shuangquan Zhu
                        </div>
                        <div styleName="row career">
                            Designer / Developer
                        </div>
                        <div styleName="row location">
                            Location: Shanghai
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
                            <h1>Summary</h1>
                            <p>Shuangquan Zhu is a professional developer who focuses on iOS now. He has strong knowledge of Objective-C, Swift and Javascript. With these skills, he created quite a few quickly developer tools. He also leads the J1 iOS team to promote the project process.
                            </p>
                            <p>He crazy loves playing basketball with friends in spare time, He also loves traveling, writing and listening music. He is always willing to try new things, and keeping to learn from them.</p>
                        </div>
                    </div>
                    <div styleName="left">
                        <div styleName="left-block">
                            <h2>Interest</h2>
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
                            <h2>Education</h2>
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

export default CSSModules(PCHome, styles, {allowMultiple: true});
