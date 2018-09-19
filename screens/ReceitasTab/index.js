import React, { Component } from 'react'
import { StyleSheet, View,Dimensions,ActivityIndicator,Image,Linking } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container,  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import TopHeader from '../../components/TopHeader';
import ItemReceita from './ItemReceita'
const parseString = require('react-native-xml2js').parseString;
const dados_receitas = [];

export default class ReceitasTab extends Component {
  static navigationOptions = {
    title: "Receitas",
    tabBarIcon:<MaterialIcons name="restaurant" style={{color:'#fff'}}  size={24} />,
  }
  state = {
    dados_receitas : [],
    loading:true
  }
  openWebSite = (url_address) =>{
    let site = new String(url_address).toString();
    Linking.openURL(site).catch(err => console.error('An error occurred', err));
  }
  async getReceitas(){
    await fetch('http://www.grupochama.com.br/app/receitas.php?d='+Date.now())
        .then((response) => response.text())
        .then((responseText) => {
            parseString(responseText, function (err, result) {
                result.rss.channel[0].item.forEach((res)=>{                  
                  dados_receitas.push({...res,key:"_"+Math.random().toString(36).substr(2, 9)});
                })
            });
            this.setState({
              dados_receitas:dados_receitas,
              loading:false
            })
            
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })

  }
  
  componentDidMount(){
    this.getReceitas();
  }

  render() {
    console.log("State====",this.state.dados_receitas);
    
    return (
      <Container  style={{ backgroundColor:"#16B76C"}}>
      <TopHeader title = {"Receitas"}/>
        <Content>
        
        {this.state.dados_receitas.map((row,index)=>            
          <ItemReceita receita = {row} key={row.key} id = {row.key} openSite = {this.openWebSite}/>            
          
        )}
        <ActivityIndicator animating={this.state.loading} size={40}  color="#fff"/>
        </Content>            
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
