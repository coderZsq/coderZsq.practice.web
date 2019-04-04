import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import App from './App';
import MovieList from './components/movie/MovieList';
import MovieDetail from './components/movie/MovieDetail';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        return <Router sceneStyle={{backgroundColor: 'white'}}>
            <Stack key="root">
                <Scene key="app" component={App} title="" hideNavBar={true}/>
                <Scene key="movielist" component={MovieList} title="热映电影列表"/>
                <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
            </Stack>
        </Router>;
    }

}