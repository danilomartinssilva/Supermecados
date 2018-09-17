import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'
import Swiper from 'react-native-swiper';

const Slider = ({capas}) =>(
    <View style={{flex:1}}>

    <Swiper style={styles.wrapper} height={240}  autoplay={true} loop={true}>
        
    {capas.map((row,index)=>(

      <View key = {index}  style={{flex:1,justifyContent:'center',backgroundColor:'transparent'}} title={<Text numberOfLines={1}>Aussie dourist dies at Bali hotel</Text>}>
      
        <Image  style={{flex:1,width:null,height:null}} resizeMethod="resize"  source={{
          uri: `${row.imagem}`,          
          cache: 'only-if-cached',          
        }}/>   


      </View>      

    ))}
  
    </Swiper>
    </View>

)

export default Slider