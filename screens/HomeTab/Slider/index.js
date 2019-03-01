import React, { Component } from 'react'
import { Text, StyleSheet, View , Image,Dimensions,Modal} from 'react-native'
import Swiper from 'react-native-swiper';
import ImageZoom from 'react-native-image-pan-zoom';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  
    container: {
      flex: 1
    },
  
    wrapper: {
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
  
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    loadingView: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.5)'
    },
  
    loadingImage: {
      width: 60,
      height: 60
    },
  
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
  
    image: {
      width,
      flex: 1
    }
  
})





const Slider = ({capas}) =>{

  
  const imagesVet= capas.map((r)=>{
    return r.imagem;
  })
  
   
  return(
    <View style={styles.container}>    


    <Swiper style={styles.wrapper} height={240}     
      
      activeDot ={<View style={{backgroundColor: '#007aff', width: 20, height: 20, borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
      dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 20, height: 20, borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      scrollEnabled = {true}
      onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
      
       loop>
       {imagesVet.map((item,index)=>(             
         <View key={index} style={styles.slide} >
         
           <Image  resizeMode='stretch' style={styles.image} source={{uri:`${item}`}} />
         </View>
       ))}
      
      
      
    </Swiper>
  </View>
  )

}

export default Slider