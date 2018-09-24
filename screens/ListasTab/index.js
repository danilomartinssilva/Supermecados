import React, { Component } from 'react'
import { Text, StyleSheet, View , AsyncStorage,ToastAndroid,ActivityIndicator,TouchableOpacity,Modal,TouchableHighlight} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Button, List, ListItem, Right, Body ,Icon, Left} from 'native-base';
import TopHeader from '../../components/TopHeader' ;
import ItensOfList from './ItensOfList'
import PouchDB from 'pouchdb-react-native';
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
const db = new PouchDB('mydb', {adapter: 'asyncstorage'})


// use PouchDB

const localDB = new PouchDB('listaChamaSupermecados');



export default class ListasTab extends Component {

  constructor(props){
    super(props);
  }
  

  state = {
    descricaoLista:'',
    listas:[],
    parentId:'',
    loading_Lista:true,
    modalVisible:false,    
    _idAdd:'',
    itensListas:[]
  }  
  componentDidMount(){
    this.getListas();
    

  }



  getListas =() =>{
    const listas = [];
    localDB.allDocs({include_docs:true,limit:9})
    .then((result)=>{
      result.rows.forEach((r)=>{
        
        listas.push(r);
      })      
      
      this.setState({
        listas:listas,
        loading_Lista:false
  
      })
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }
  static navigationOptions = {
    title: "Listas",
    tabBarIcon:<MaterialIcons name="list" style={{color:'#fff'}}  size={24} />,
  }
  onDeleteList=(key)=>{
    localDB.get(key).then((doc)=>{
      localDB.remove(doc)
    }).then((res)=>{
      this.getListas();
    })
  }
  onModalCloseHandler = () =>{
    this.setState({
      modalVisible:false
    })
  }
  onModalOpenHandler = () =>{
    
    this.setState({
      modalVisible:true
    })
  }
  onSaveTitle= ()=>{
    if(this.state.descricaoLista.length>0)  {

     localDB.post((({descricao:this.state.descricaoLista.toLocaleUpperCase()})))
    .then(resultado=>{
      
      ToastAndroid.showWithGravity(
        'Lista Salva!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      this.getListas();

      })
    .catch((err)=>console.log(err))  
    }

  }
  onSelectecValue = (key) =>{
    
  }

 
  render() {         
    
    
    return (
      <Container>   
      <ItensOfList
         modalCloseHandler = {()=>this.onModalCloseHandler()} 
         OnmodalVisible = {this.state.modalVisible} 
         onParentId = {this.state.parentId} 
      />      
      
     
      <TopHeader title= {"Lista de Compras"}/>
      
      <Content>
        <Form>
          <Item>
            <Input placeholder="Nome da Lista que deseja criar"  id = "descricao_lista" onChangeText={(text) => this.setState({descricaoLista: text})} value = {this.state.descricaoLista}/>   
          </Item>          
        </Form>
        
        <Button iconLeft block primary onPress={this.onSaveTitle}>
          <MaterialIcons name="add" size={30} color="#fff" />
          <Text  style = {{color:'#fff'}}>Criar Lista</Text>
        </Button>
        <ActivityIndicator animating = {this.state.loading_Lista}/>
        <List>
           { this.state.listas.map((result)=>(
           
          <ListItem icon key = {result.key} id={result.key}  >
            <Left>
              <MaterialIcons   name="list" style={{color:'green'}}  size={24} />              
            </Left>
            
            <Body>
              <TouchableOpacity onPress = {()=>this.setState({parentId:result.id,modalVisible:true})}>              
                <Text>{result.doc.descricao}</Text>
              </TouchableOpacity>
            </Body>           
            
            <Right>                              
                <MaterialIcons   name="delete" style={{color:'red'}} onPress={()=>this.onDeleteList(result.doc._id)} size={24} />    
            </Right>
          </ListItem>
        
        ))}
        </List>
        </Content>

    </Container>
    )
  }
}

const styles = StyleSheet.create({})
