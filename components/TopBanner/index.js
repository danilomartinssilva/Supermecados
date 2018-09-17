import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import styles from './style';

export default class TopBanner extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../../assets/produto.jpg')} style={styles.containerImg} />
      </View>
    )
  }
}


