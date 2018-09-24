import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text, Thumbnail } from 'native-base';
import {Dimensions} from 'react-native';
import styles from './style';
import styles1 from './style';

const TopHeader = ({title}) => (

  <Header style = {styles.container}>
  <Body >
    {
      title==="Home" ?
      (<Thumbnail style={{alignSelf:'center',width:Dimensions.get('window').width,height:100}} resizeMethod="resize" resizeMode="cover" source={require('../../assets/logo_39anos.png')} />)
      :(<Title style={{color:"#fff", alignSelf:"center"}}>{title}</Title>)
    }
    
  </Body>

 
</Header>

)

export default TopHeader;
