import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_product.css';

@CSSModules(styles)
export default class PCProduct extends Component {

    render() {
        return (
            <div styleName="project">
                <div styleName="project-block">
                    <div styleName="icon">
                        <a href={this.props.href}><img src={this.props.src} alt=""/></a>
                    </div>
                    <div styleName="download">
                        <a href={this.props.href}>Download</a>
                    </div>
                    <div styleName="title">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </div>
                    <div styleName="desc">
                        <ul>
                            <li>{this.props.text1}</li>
                            <li>{this.props.text2}</li>
                            <li>{this.props.text3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
