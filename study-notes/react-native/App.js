/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './components/tabbars/Home';
import Search from './components/tabbars/Search';
import ShopCar from './components/tabbars/ShopCar';
import Me from './components/tabbars/Me';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'home'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="主页"
              renderIcon={() => <Icon name="home" size={25} color="black"/>}
              renderSelectedIcon={() => <Icon name="home" size={25} color="#0079ff"/>}
              onPress={() => this.setState({selectedTab: 'home'})}
          >
            <Home/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'search'}
              title="搜索"
              renderIcon={() => <Icon name="search" size={25} color="black"/>}
              renderSelectedIcon={() => <Icon name="search" size={25} color="#0079ff"/>}
              onPress={() => this.setState({selectedTab: 'search'})}
          >
            <Search/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'shopcar'}
              title="购物车"
              badgeText="0"
              renderIcon={() => <Icon name="shopping-cart" size={25} color="black"/>}
              renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079ff"/>}
              onPress={() => this.setState({selectedTab: 'shopcar'})}
          >
            <ShopCar/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'me'}
              title="我"
              renderIcon={() => <Icon name="user" size={25} color="black"/>}
              renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079ff"/>}
              onPress={() => this.setState({selectedTab: 'me'})}
          >
            <Me/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
