import React, {Component} from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import Stage1Screen from './stage1';
import Stage2Screen from './stage2';
import PriceScreen from './price';

import "@expo/vector-icons"; // 5.2.0

const RootStack = createStackNavigator(
  {
    Price: PriceScreen,
    Stage1: Stage1Screen,
    Stage2: Stage2Screen,

  },
  {
    initialRouteName: 'Stage1',
    // initialRouteName: 'Stage2',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'teal',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

//styling of the application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

});