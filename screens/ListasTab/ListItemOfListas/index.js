import { Container, Content,ListItem,Body,CheckBox,Left} from 'native-base';
import React,{Component} from 'react';
import {Text} from 'react-native';
const ListItemOfListas = (onDadosListaItem,id) =>{
 console.log("AQUI",onDadosListaItem);
 return(   
             <ListItem>
            <Left>
            <Text>{onDadosListaItem.onDadosListaItem.descricao}</Text>
            </Left>
            </ListItem>
  )
}

export default ListItemOfListas;