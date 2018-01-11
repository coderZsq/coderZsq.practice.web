import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_career.css';

@CSSModules(styles)
export default class MobileCareer extends Component {

    render() {
        return (
            <div styleName="career">
                <div styleName="career-block">
                    <p>{this.props.time}</p>
                    <p>{this.props.job},
                        <a href={this.props.href}>{this.props.corp}</a>, Shanghai</p>                        
                </div>
            </div>
        )
    }
}
