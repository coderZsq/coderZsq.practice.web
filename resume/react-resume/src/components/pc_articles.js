import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_articles.css';
import PCColumn from './pc_column';
import {GET, URL} from '../utils/http';

@CSSModules(styles)
export default class PCArticles extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                columnList: []
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchArticles).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        let columnList = data.columnList.map((columnVo, index) => (
            <PCColumn name={columnVo.name} articles={columnVo.articles} key={index}/>
        ))
        return (
            <div>
              <div styleName="subtitle">
                <h1>Articles</h1>
              </div>
              <div styleName="articles">
                <div styleName="articles-block">
                    {columnList}
                </div>
              </div>
            </div>
        )
    }
}
