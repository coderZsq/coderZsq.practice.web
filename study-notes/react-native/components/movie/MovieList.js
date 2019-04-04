import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    movieTitle: {
        fontWeight: 'bold'
    }
})

export default class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: 1,
            totalPage: 0,
            pageSize: 15,
            isloading: true
        };
    }

    componentWillMount(): void {
        this.getMoviesByPage();
    }

    render(): React.ReactNode {
        return <View>
            {this.renderList()}
        </View>;
    }

    getMoviesByPage = () => {
        const start = (this.state.nowPage - 1) * this.state.pageSize;
        const url = `https://api.douban.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`;
        // fetch(url).then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             isloading: false,
        //             movies: data.subjects,
        //             totalPage: Math.ceil(data.total / this.state.pageSize)
        //         });
        //     });
        setTimeout(() => {
            this.setState({
                isloading: false,
                movies: require('./test_list').subjects,
                totalPage: 1
            });
        }, 1000);
    }

    renderList = () => {
        if (this.state.isloading) {
            return <ActivityIndicator size="large"/>
        }
        return <FlatList
            data={this.state.movies}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => this.renderItem(item)}
            ItemSeparatorComponent={this.renderSeparator}
            onEndReachedThreshold={0.5}
            onEndReached={this.loadNextPage}
        />

    }

    renderItem = (item) => {
        return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.moviedetail({ id: item.id }) }}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Image source={{uri: item.images.small}} style={{width: 100, height: 140, marginRight: 10}}/>
                <View style={{ justifyContent: 'space-around' }}>
                    <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
                    <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
                    <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
                    <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
                </View>
            </View>
        </TouchableHighlight>
    };

    renderSeparator = () => {
        return <View style={{borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10}}/>
    }

    loadNextPage = () => {
        if ((this.state.nowPage + 1) > this.state.totalPage) {
            return
        }
        this.setState({
            nowPage: this.state.nowPage + 1
        }, () => {
            this.getMoviesByPage()
        })
    }
}