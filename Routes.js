import {createSwitchNavigator ,HeaderBackButton, TabNavigator, createBottomTabNavigator,createStackNavigator ,StackNavigator} from 'react-navigation';
import React, { Component } from 'react'


import TopHeader from './components/TopHeader';
import OfersTab from './screens/OfersTab';
import OrderTab from './screens/OrderTab';
import DetailTab from './screens/DetailTab';
import HomeTab from './screens/HomeTab';

import ListasTab from './screens/ListasTab';
import AddItem from './screens/ListasTab/AddItem';
import ReceitasTab from './screens/ReceitasTab';
//import AddItem from './screens/ListasTab/AddItem';


import LocationTab from './screens/LocationTab';
import ComprasTab from './screens/ComprasTab';

/*
export default StackNavigator ({
  AdicionarItemLista:AddItem,
  Tabs:TabBottomApplication
});*/

const Tabs = createBottomTabNavigator({
  HomeTab:HomeTab,
  OfersTab:OfersTab  ,  
  ReceitasTab:ReceitasTab,  
  ListasTab:ListasTab,
  LocationTab:LocationTab,  
  ComprasTab:ComprasTab,  

},{
  initialRouteName:'HomeTab',
  tabBarOptions:{
    showLabel:true,
    showIcon:true,  
    activeTintColor: '#696969',
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
});

 const stackPages= createStackNavigator({
  AddItemLista: {
    screen:AddItem,
    navigationOptions: () => ({
      title: `A`,           
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }),
  
  },


}); 


export default createSwitchNavigator({
  TabApplication:Tabs  ,
  PageStack:stackPages
})