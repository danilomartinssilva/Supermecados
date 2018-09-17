import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class LocationTab extends Component {
    static navigationOptions = {
        tabBarIcon:<MaterialIcons name="location-on" style={{color:'#fff'}}  size={24} />,    

        title:'Lojas'
        
        
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
