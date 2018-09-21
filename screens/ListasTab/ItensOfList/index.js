import React, { Component } from 'react'
import { Text, StyleSheet, View,Modal, TouchableHighlight} from 'react-native'
import { Container, Header, Content, List, ListItem, Button ,Form,Item,Input,Card,CardItem,Right} from 'native-base'; 
import TopHeader from '../../../components/TopHeader'
import PouchDB from 'pouchdb-react-native';
import _ from 'lodash';
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
const db = new PouchDB('mydb', {adapter: 'asyncstorage'})

const localDB = new PouchDB('itensListaSupermecado');

export default class index extends Component {
    constructor(props){
        super(props);
        
        
    }
    state={
      itens_lista:[],
      loading_itens_lista:false,
      descricao:'',quantidade:'',valor:''
      
    }
 
    componentDidMount(){
      
    this.getItensLista();
    
    }
    getItensLista = () =>{
      const itens_lista = [];
      
      localDB.allDocs({include_docs:true,limit:9})
          .then((result)=>{
            result.rows.forEach((r)=>{     
              
                  itens_lista.push(r);            
            })      
            
            this.setState({
              itens_lista:itens_lista,
              loading_itens_lista:false
        
            })
          })
          .catch((err)=>{
            console.log(err);
          })
    }

    handlerModalAddClose = () =>{
      this.setState({
        modalAddItem:false,
      })
    }

    onSaveAdd = () =>{
    
      const data = {
        'descricao':this.state.descricao,
        'valor':this.state.valor,
        'quantidade':this.state.quantidade,
        'parentId':this.props.onParentId
      }
      
      console.log("DATA",data);
      localDB.post(data).then(function (response) {  
        console.log(response);
          

      }).catch(function (err) {
          console.log(err);
      });
      this.getItensLista();
  
    
    }
    onSumValorTotal = () =>{
     return 10.99;


    }

  render() {
    
    return (
        <Modal       
        
        animationType="slide"
        transparent={false}
        visible={this.props.OnmodalVisible}
        onRequestClose={() => {
          
          this.props.modalCloseHandler();
        }}>
       
        
        <Container>


          <TopHeader title = {"Itens da Lista"}/>

          <Card>
            <CardItem>              
              <Text>Valor Total: {this.onSumValorTotal()} </Text>           
             </CardItem>
           </Card>
          <Content>
          <Form>
            <Item>
            <Input placeholder="Descricao" onChangeText ={(text)=>this.setState({descricao:text})} />
            </Item>
            <Item>
              <Input placeholder="Quantidae" onChangeText ={(text)=>this.setState({quantidade:text})} />
            </Item>
            <Item last>
            <Input placeholder="Valor" onChangeText ={(text)=>this.setState({valor:text})} />
            </Item>
            
          </Form>
          
          <Button 
          block onPress={()=>this.onSaveAdd()} success style = {{marginTop:20,marginBottom:20}}>
              <Text>Adicionar Item</Text>
          </Button>
            <List>
            {this.state.itens_lista.filter((row)=>row.doc.parentId===this.props.onParentId).map((r,index)=>{
              return(
              <ListItem key={index}>
              
                <Text>{r.doc.descricao}</Text>
              </ListItem>
              )

            })}
            </List>
          </Content>
      </Container>
        
      </Modal>
    )
  }
}

const styles = StyleSheet.create({})
