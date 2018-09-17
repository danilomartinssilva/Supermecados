import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class ListasTab extends Component {

  static navigationOptions = {
    title: "Listas",
    tabBarIcon:<MaterialIcons name="list" style={{color:'#fff'}}  size={24} />,

  }
  render() {
    return (
      <View>
        <Text> LISTAS </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
