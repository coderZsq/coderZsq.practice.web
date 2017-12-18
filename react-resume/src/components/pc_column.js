import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_column.css';

@CSSModules(styles)
export default class PCColumn extends Component {

    render() {

        const rows = this.props.articles.map((article, index) => (
            <div styleName="row" key={index}>
                <a target="_blank"  href={article.href}>{article.name}</a>
            </div>
        ))

        return (
            <div styleName="column">
                <div styleName="column-block">
                    <div styleName="column-list">
                        {rows}
                    </div>
                    <div styleName="column-title">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}
