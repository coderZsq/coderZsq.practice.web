import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {animateScroll} from 'react-scroll';
import styles from './pc_navigation.css';

@CSSModules(styles)
export default class PCNavigation extends Component {

    scrollTo(y) {
        animateScroll.scrollTo(y);
    }

    render() {
        return (
            <div>
                <div styleName="nav">
                    <div styleName="content">
                        <div styleName="title">
                            Castie!
                        </div>
                        <div styleName="items">
                            <span onClick={this.scrollTo.bind(this, 0)}>
                                <a>Home</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 600)}>
                                <a>Projects</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 1200)}>
                                <a>GitHub</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 1800)}>
                                <a>Articles</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 2930)}>
                                <a>Experience</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 3530)}>
                                <a>Contact</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div styleName="nav-offset"></div>
            </div>
        )
    }
}
