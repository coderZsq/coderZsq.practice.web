import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {animateScroll} from 'react-scroll';
import styles from './pc_navigation.css';

@CSSModules(styles)
export default class PCNavigation extends Component {

    $h(id) {
        return document.getElementById(id).offsetHeight;
    }

    scrollTo(param) {
        let offset;
        if (param === "home") {
            offset = 0;
        } else if (param === "projects") {
            offset = this.$h("home");
        } else if (param === "github") {
            offset = this.$h("projects") + this.$h("home");
        } else if (param === "articles") {
            offset = this.$h("github") + this.$h("projects") + this.$h("home");
        } else if (param === "experience") {
            offset = this.$h("articles") + this.$h("github") + this.$h("projects") + this.$h("home");
        } else if (param === "contact") {
            offset = this.$h("experience") + this.$h("articles") + this.$h("github") + this.$h("projects") + this.$h("home");
        }
        animateScroll.scrollTo(offset);
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
                            <span onClick={this.scrollTo.bind(this, 'home')}>
                                <a>Home</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 'projects')}>
                                <a>Projects</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 'github')}>
                                <a>GitHub</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 'articles')}>
                                <a>Articles</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 'experience')}>
                                <a>Experience</a>
                            </span>
                            <span onClick={this.scrollTo.bind(this, 'contact')}>
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
