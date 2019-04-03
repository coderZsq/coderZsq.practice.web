import React from 'react';
import {Spin, Alert, Pagination} from "antd";
import fetchJsonp from 'fetch-jsonp';
import MovieItem from './MovieItem.jsx';


export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 12,
            total: 0,
            isloading: true,
            movieType: props.match.params.type
        };
    }

    componentWillMount() {
        this.loadMovieListByTypeAndPage();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps);
        this.setState({
            isloading: true,
            nowPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type
        }, () => {
            this.loadMovieListByTypeAndPage();
        });
    }

    render() {
        return <div>
            {this.renderList()}
        </div>
    }

    loadMovieListByTypeAndPage = () => {
        const start = this.state.pageSize * (this.state.nowPage - 1);
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`;
        fetchJsonp(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    isloading: false,
                    movies: data.subjects,
                    total: data.total
                });
            });
        // const data = require('../test_data/' + this.state.movieType);
        // setTimeout(() => {
        //     this.setState({
        //         isloading: false,
        //         movies: data.subjects,
        //         total: data.total
        //     });
        // }, 1000);
    };

    renderList = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading">
                <Alert
                    message="正在请求电影列表"
                    description="精彩内容, 马上呈现..."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.movies.map(item => {
                        return <MovieItem {...item} key={item.id} history={this.props.history}/>
                    })}
                </div>
                <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged}/>
            </div>
        }
    }

    pageChanged = (page) => {
        // window.location.href = '#/movie/' + this.state.movieType + '/' + page;
        this.props.history.push('/movie/' + this.state.movieType + '/' + page);
    }

}