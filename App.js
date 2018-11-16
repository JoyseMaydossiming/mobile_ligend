/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './components/home';
import {Heroes} from './components/heroes';
import {Settings} from './components/settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#000055',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}