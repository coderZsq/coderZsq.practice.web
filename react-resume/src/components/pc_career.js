import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_career.css';

@CSSModules(styles)
export default class PCCareer extends Component {

    render() {
        return (
            <div styleName="career">
                <div styleName="career-block">
                    <h2>{this.props.time}</h2>
                    <p>{this.props.job},&nbsp;
                        <a href={this.props.href}>{this.props.corp}</a>,&nbsp;Shanghai</p>
                    <ul>
                        <li>{this.props.desc1}</li>
                        <li>{this.props.desc2}</li>
                        <li>{this.props.desc3}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
