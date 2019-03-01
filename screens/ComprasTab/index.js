import React, { Component } from 'react';

import { View ,Text,Linking,WebView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import styles from './styles';

export default class ComprasTab extends Component {
        static navigationOptions =  {
          
          tabBarIcon:<MaterialIcons name="add-shopping-cart" style={{color:'#fff'}}  size={24} />,
          title:'Delivery'        
      }
      
  
      render() {
        
        return (
         <View />
        );
      }
  componentDidMount(){

      Linking.openURL('https://delivery.grupochama.com.br/chama-supermercados');
  }
  
}

