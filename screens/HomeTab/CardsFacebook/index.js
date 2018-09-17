import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';


const CardsFacebook = ({posts_face}) =>{
    


    return(
            <Card >                    
            <CardItem bordered>
            <Left>
            <Thumbnail source={require('../../../assets/logo_chama.png')} />
            <Body>
                <Text>Chama Supermecados</Text>
                <Text note>{ formatterDate(posts_face.created_time.date) }</Text>                
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
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
                </Button>
            </Left>
            <Body>
                <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
                </Button>
            </Body>
            <Right>
                <Text>11h ago</Text>
            </Right>
            </CardItem>
        </Card>
    )
}

const formatterDate = ( date) =>{
    /* console.log(date); */
  /* let oldDate = date.split( )[0].split('-').reverse(); */
  /* let newMonth = oldDate[0]+' de '+ oldDate[meses[parseInt(oldDate[1])]] + ' de ' + oldDate[2]; */
  
    return new Date().toLocaleString();


}

const styles = StyleSheet.create({})

export default CardsFacebook