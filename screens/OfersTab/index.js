import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback ,
  Dimensions,
  Modal
} from 'react-native'
import Swiper from 'react-native-swiper'
import ImageZoom from 'react-native-image-pan-zoom';
const { width } = Dimensions.get('window')
import TopHeader from '../../components/TopHeader';
const parseString = require('react-native-xml2js').parseString;
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = {
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



  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}


export default class OfersTab extends Component {
  state ={
    dadosTabloid:[],
    modalVisible:false,
    imageSelected:''
  }
  static navigationOptions = {
    tabBarIcon:<MaterialIcons name="attach-money" style={{color:'#fff'}}  size={24} />,    
    title:'Ofertas' ,
    
  }
  
   getTabloid= ()=>{
     const dadosTabloid = [];
     fetch('http://www.grupochama.com.br/app/tabloide.xml?d='+Date.now())
        .then((response) => response.text())
        .then((responseText) => {
            parseString(responseText, function (err, result) {
                result.ofertas.item.forEach((row)=>{
                  dadosTabloid.push(row);
                })
            });
            this.setState({
              dadosTabloid:dadosTabloid
            })
            
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })

  
  }
  
  componentDidMount(){
    this.getTabloid();
  }
  onDoublePress = (item) => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      this.setState({
        imageSelected:item,
        modalVisible:true
      })
    }
    this.lastPress = time;
    };
  render () {
    const ModalImage = () =>(
      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        
        this.setState({
          modalVisible:false
        })
      }}>
      <ImageZoom cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={width}
      imageHeight={Dimensions.get('window').height}>
        <Image style={{width:null, height:null, flex:1}}
            source={{uri:`${this.state.imageSelected}`}}/>
      </ImageZoom>
    </Modal>
    
    )
    const urlsImages = this.state.dadosTabloid.map(row=>{
      return row.imagem_big;
    })
    return (
      <View style={styles.container}>    
        <ModalImage          
        />
        {this.state.dadosTabloid.length>0
        &&
        <Swiper style={styles.wrapper} height={240}

          
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          activeDot ={<View style={{backgroundColor: '#007aff', width: 20, height: 20, borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 20, height: 20, borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}

          
           loop>
           {urlsImages.map((item,index)=>(             
             
             <TouchableWithoutFeedback  style = {{flex:1}} key = {index} onPress= {()=> this.onDoublePress(item)}>

             <View  style={styles.slide}   title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
               <Image  resizeMode='stretch' style={styles.image} source={{uri:`${item}`}} />
               </View>
            </TouchableWithoutFeedback>

           ))}
        </Swiper>
        } 

        
      </View>
    )
  }
}