import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_target.css';

@CSSModules(styles)
export default class PCTarget extends Component {

    componentDidMount() {
        this.setDotColor();
    }

    setDotColor() {
        this.refs.dot.style.backgroundColor = this.props.color;
    }

    render() {
        return (
            <div styleName="target">
                <div styleName="target-block">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                    <div styleName="download">
                        <a href={this.props.href}>Clone or download</a>
                    </div>
                    <div styleName="comment">
                        <div styleName="dot" ref="dot"></div>
                        <div styleName="language">
                            {this.props.language}
                        </div>
                        <div styleName="star">
                            ★ {this.props.star}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
