import React, { Component } from 'react'
import { Text, StyleSheet, View,Platform,StatusBar } from 'react-native'
import {TabNavigator , createTabNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createStackNavigator,createSwitchNavigator} from 'react-navigation';
/* import AboutTab from './AboutTab'; */
import LikesTab from './LikesTab';
import {Container} from 'native-base';
import TopHeader from '../components/TopHeader';
import TopBanner from '../components/TopBanner';
import CarTab from './CarTab';
import OrderTab from './OrderTab';
import LocationTab from './LocationTab';
import list_products from '../fakers/fakers';
import DetailTab from './DetailTab';
import HomeTab from './HomeTab';
import ListasTab from './ListasTab';
import ReceitasTab from './ReceitasTab';

export default class MainScreen extends Component {
  state= {
    qtd:2,
    list_of_products:list_products
  } 
  setProduct=(product)=>{
       
  }
    
  render() {
    return (
      <Container style={{backgroundColor:"#16B76C"}}>            
      <AppTabNavigation screenProps = {{...this.state, setProduct:this.setProduct}}/>
      </Container>
    )
  }
}


const styles = StyleSheet.create({})

const AppTabNavigation = createBottomTabNavigator({
  HomeTab:HomeTab,
  CarTab:CarTab  ,  
  ReceitasTab:ReceitasTab,
  /* OrderTab:OrderTab, */
  ListasTab:ListasTab,
  LocationTab:LocationTab,
  

},{
  initialRouteName:'ReceitasTab',
  tabBarOptions:{
    showLabel:true,
    showIcon:true,  
    labelStyle:{
      fontSize:12,
      color:'#fff',
      fontWeight:"900"

    } , 
    style:{    
      /*backgroundColor:"#E8D4D1",      */
      backgroundColor:"#16B76C",
      paddingBottom:10,
      paddingTop:10,
      height:60
      
    }
  },
})






