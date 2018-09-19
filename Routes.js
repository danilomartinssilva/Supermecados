import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createStackNavigator} from 'react-navigation';

import AddItem from './screens/Add'

export default class Routes extends Component {
  render() {
    return (
      <RootStack/>
    )
  }
}

const styles = StyleSheet.create({})


const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
  });