import React, { Component } from 'react'
import { Image, StyleSheet, View ,ActivityIndicator,Dimensions,RefreshControl} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import TopHeader from '../../components/TopHeader';
import Slider from './Slider';
import CardsFacebook from './CardsFacebook';
const parseString = require('react-native-xml2js').parseString;

import {listAll} from '../../store/api_capa';


export default class HomeTab extends Component {
  state = {
    capas:[],
    posts_face:[],
    loading_capa:true,
    loading_posts:true,
    refreshing:false
  }

  clearData = () =>{
    dados_capa = [];
    post_face = [];
    this.setState({
      posts_face:[],
      capas:[]

    })

  }

  constructor (props) {
    super(props);             
    
  }
  async getCapas(){
   const dados_capa =  [];
    await fetch('http://www.grupochama.com.br/app/capas.xml?d='+Date.now())
        .then((response) => response.text())
        .then((responseText) => {
            parseString(responseText, function (err, result) {
                result.capas.item.forEach((r)=>{
                  dados_capa.push(r);
                })
            });
            this.setState({
              capas:dados_capa,
              loading_capa:false,
              refreshing:false
            })
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
            
    })

}
  _onRefresh = () =>{    
    this.setState({
      refreshing:true,   

    })
    this.getCapas();
    this.getFacebook()
  }
  getFacebook = async () =>{
    const posts_face = [];
    await fetch('http://grupochama.com.br/app/facebook.php?d='+Date.now())
          .then((response)=>{
              return response.text();
          })
          .then((json) =>{
              
              return JSON.parse(json)
          })
          .then((text)=>{
              text.posts.forEach((r)=>{
                posts_face.push(r);
              })
            })
            .catch((err)=>{
              console.log(err);
            })
            this.setState({
              posts_face,
              refreshing:false
            })

  }

  componentDidMount(){
    this.getCapas() ; 
    this.getFacebook();

   }
    
    static navigationOptions = {
        title: "Home",
        tabBarIcon:<MaterialIcons name="home" style={{color:'#fff'}}  size={24} />,
    }
  
  render() {   
    console.log(this.state);
    
    return (
      <Container  style={{ backgroundColor:"#16B76C"}}>
      <TopHeader title = {"Home"}/>
        <Content refreshControl= {
          <RefreshControl refreshing = {this.state.refreshing}
          onRefresh= {this._onRefresh}/>   } >
          <Card >
          <ActivityIndicator animating={this.state.loading_capa} size={40} style={{position:'absolute',zIndex:100 ,top:Dimensions.get('window').height/2 -100,left:Dimensions.get('window').width/2 -20}} />
          <CardItem bordered>
          <Left>
          <Thumbnail source={require('../../assets/logo_chama.png')} />
          <Body>
          <Text>Chama Supermecados</Text>
          <Text note> 12 de setembro de 2018</Text>
          </Body>
          </Left>
          </CardItem>          
            <CardItem cardBody style ={{marginTop:10}} >            
              {/*SWIPPER*/}
              <Slider capas = {this.state.capas}/>              
            </CardItem>            
          </Card>
          {this.state.posts_face.map((row,index)=>(

          <CardsFacebook key = {index} posts_face = {row}  openWebSite = {this.openWebSite}/>

          ))}
        </Content>            
      </Container>

    )
  }
}
const styles = StyleSheet.create({
  

})



