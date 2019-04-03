import React from 'react';
import {Alert, Button, Icon, Spin} from "antd";
import fetchJsonp from 'fetch-jsonp';


export default class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {},
            isloading: true
        };
    }

    componentWillMount() {
        fetchJsonp('https://api.douban.com/v2/movie/subject/' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data,
                    isloading: false
                });
            });
    }

    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left"/>返回电影列表页面
            </Button>
            {this.renderInfo()}
        </div>
    }

    goBack = () => {
        this.props.history.go(-1);
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading">
                <Alert
                    message="正在请求电影数据"
                    description="精彩内容, 马上呈现..."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{textAlign: 'center'}}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.info.images.large} alt=""/>
                </div>
                <p style={{textIndent: '2em', lineHeight: '30px'}}>{this.state.info.summary}</p>
            </div>
        }
    }
}