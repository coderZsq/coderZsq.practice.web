import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_project.css';

@CSSModules(styles)
export default class MobileProject extends Component {

    render() {
        console.log(this.props.href);
        return (
            <div styleName="project">
                <div styleName="icon">
                    <a href={this.props.href}><img src={this.props.src} alt=""/></a>
                </div>
                <div styleName="get">
                    <a href={this.props.href}>Get</a>
                </div>
                <div styleName="title">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
