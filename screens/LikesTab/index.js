import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Icon} from 'native-base';

export default class LikesTab extends Component {
  static navigationOptions = {

      tabBarIcon:<Icon name="ios-add" style={{color:'red'}}  size={24} />,
      
      
      
      

  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Icon name="ios-add" style={{color:'red'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
