import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'native-base';
export default class CarTab extends Component {
    static navigationOptions = {
        tabBarIcon:<Icon name="cart" style={{color:'#fff'}}  size={24} />,
        title:'Ofertas',
        
        
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
