import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const formatterDate = ( date) =>{
    console.log(date);
    const oldDate = date.split('-').reverse();
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio",
    "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    
    return oldDate[0]+" de "+ meses[parseInt(oldDate[1])] + " de " + oldDate[2]; 
    
}
const CardsFacebook = ({posts_face}) =>{
    


    return(
            <Card >                    
            <CardItem bordered>
            <Left>
            <Thumbnail source={require('../../../assets/logo_chama.png')} />
            <Body>
                <Text>Chama Supermecados</Text>
                <Text note>{ formatterDate(String(posts_face.created_time.date).split(' ')[0])}</Text>                
            </Body>
            </Left>            
            
            </CardItem>
            <CardItem cardBody>
                <Image resizeMethod="resize" resizeMode="cover" source={{uri: posts_face.attachments[0].media.image.src}} style={{height: 200, width: null, flex: 1}}/>                
            </CardItem>
            <CardItem>
                <Text>{posts_face.message}</Text>
            </CardItem>
            <CardItem>
            <Left>
                <Button transparent>
                <MaterialIcons active name="thumb-up" />
                <Text> Likes</Text>
                </Button>
            </Left>
            <Body>
                <Button transparent>
                <MaterialIcons active name="chat-bubble" />
                <Text>0 Comments</Text>
                </Button>
            </Body>
            <Right>
                <Text></Text>
            </Right>
            </CardItem>
        </Card>
    )
}


const styles = StyleSheet.create({})

export default CardsFacebook