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
  
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
  
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
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
  console.log(imagesVet);
   
  return(
    <View style={styles.container}>    


    <Swiper style={styles.wrapper} height={240}

      scrollEnabled = {true}
      onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
      dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      
       loop>
       {imagesVet.map((item,index)=>(             
         <View key={index} style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
           <Image  resizeMode='stretch' style={styles.image} source={{uri:`${item}`}} />
         </View>
       ))}
      
      
      
    </Swiper>
  </View>
  )

}

export default Slider