import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Thumbnail } from 'native-base';
import { Dimensions, View, Image } from 'react-native';
import styles from './style';
import styles1 from './style';
const logo = require('../../assets/avatar_logo.png')

const TopHeader = ({ title }) => (

  /*  <Header style={styles.container}>
     <Body >
       {
         title === "Home" ?
           (<Thumbnail style={{ alignSelf: 'center', width: Dimensions.get('window').width, height: 100 }} resizeMethod="resize" resizeMode="cover" source={logo} />)
           : (<Title style={{ color: "#fff", alignSelf: "center" }}>{title}</Title>)
       }
 
     </Body>
 
 
   </Header> */
  <View style={{ flexDirection: 'row', backgroundColor: "#00862F" }}>
    <Image source={logo} resizeMode="contain" style={{ width: "100%", alignItems: "center" }} />

  </View>

)

export default TopHeader;
