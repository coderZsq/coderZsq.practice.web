import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lunbotu: []
        };
    }

    componentWillMount(): void {
        fetch('http://vue.studyit.io/api/getlunbo')
            .then(res=>res.json())
            .then(data => {
                this.setState({
                    lunbotu: data.message
                });
            });
    }

    render(): React.ReactNode {
        return <View>
            <View style={{height: 220}}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                    {this.state.lunbotu.map((item, i) => {
                        return <View key={i}>
                            <Image source={{uri: item.img}} style={{width: '100%', height: '100%'}}/>
                        </View>
                    })}
                </Swiper>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={styles.box}>
                    <Image source={require('../../images/menu1.png')} style={{width: 60, height: 60}}/>
                    <Text>新闻资讯</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu2.png')} style={{width: 60, height: 60}}/>
                    <Text>图片分析</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu3.png')} style={{width: 60, height: 60}}/>
                    <Text>商品购买</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu4.png')} style={{width: 60, height: 60}}/>
                    <Text>视频专区</Text>
                </View>
                <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
                    <View>
                        <Image source={require('../../images/menu5.png')} style={{width: 60, height: 60}}/>
                        <Text>热映电影</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.box}>
                    <Image source={require('../../images/menu6.png')} style={{width: 60, height: 60}}/>
                    <Text>联系我们</Text>
                </View>
            </View>
        </View>;
    }

    goMovieList = () => {
        Actions.movielist()
    }
}


const styles = StyleSheet.create({
    box: {
        width: '33.33%',
        alignItems: 'center',
        marginTop: 15
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})