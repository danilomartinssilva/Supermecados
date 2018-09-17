import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';
import styles from './style';

const TopHeader = ({title}) => (

  <Header style = {styles.container}>
  
  <Body >
    <Title style={{color:"#fff", alignSelf:"center"}}>{title}</Title>
  </Body>
 
</Header>

)

export default TopHeader;
