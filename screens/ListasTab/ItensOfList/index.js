import React, { Component } from 'react'
import { Text, StyleSheet, View,Modal, TouchableHighlight,ToastAndroid} from 'react-native'
import { Container, Header, Content, List, ListItem, Button ,Form,Item,Input,Card,CardItem,Right,CheckBox, Left,Icon, Body} from 'native-base'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
    changeCheckedElement = (key,check,rev) =>{

      localDB.get(key).then((doc)=>{
        doc.checkIten = check;
        return localDB.put(doc);
      }).then((res)=>{
          this.getItensLista();
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
        'parentId':this.props.onParentId,
        'checkIten':false
      }
      
      if(this.state.descricao.length>0 && this.state.quantidade.length>0 && this.state.valor.length>0){
      
          localDB.post(data).then(function (response) {           
            ToastAndroid.showWithGravity(
              'Adicionado a lista!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );    

          }).catch(function (err) {
              console.log(err);
          });
          this.getItensLista();
    }
    else{
      ToastAndroid.showWithGravity(
        'Você precisa preencher os campos!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  
    
    }
    onSumValorTotal = () =>{

      const total = this.state.itens_lista.filter((r)=>{
        return r.doc.parentId===this.props.onParentId
      });
      
      let sum = 0;
      total.forEach((row)=>{
        sum += parseFloat(new String(row.doc.valor).replace(',','.')) * parseFloat(new String(row.doc.quantidade).replace(',','.'));
      });
      
      return sum.toFixed(2).replace('.',',');

    }
    deleteItenList = (key) =>{
      localDB.get(key).then((doc)=>{        
        return localDB.remove(doc);
      }).then((res)=>{
          this.getItensLista();
      })
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
              <Text style = {{fontSize:20,fontWeight:'bold'}}>Valor Total: {this.onSumValorTotal()} </Text>           
             </CardItem>
           </Card>
          <Content>
          <Form>
            <Item regular style={{marginTop:10,paddingLeft:10}}>
            <Input placeholderTextColor="#808080" placeholder="Produto" onChangeText ={(text)=>this.setState({descricao:text})} />
            </Item>
            <Item regular style={{marginTop:10,paddingLeft:10}}>
              <Input placeholderTextColor="#808080" placeholder="Qtd" onChangeText ={(text)=>this.setState({quantidade:text})} />
            </Item>
            <Item regular style={{marginTop:10,paddingLeft:10}}>
            <Input placeholderTextColor="#808080" placeholder="RS 9,99" onChangeText ={(text)=>this.setState({valor:text})} />
            </Item>
            
          </Form>
          
          <Button 
          block onPress={()=>this.onSaveAdd()} success style = {{marginTop:20,marginBottom:20}}>
              <Text style={{color:"#fff", fontWeight:'bold'}}>Adicionar Item</Text>
          </Button>
            <List>
            {this.state.itens_lista.filter((row)=>row.doc.parentId===this.props.onParentId).map((r,index)=>{
              return(
              <ListItem key={index}>
                <Left  >
                {r.doc.checkIten===false ? (<MaterialIcons  name="check-box-outline-blank" size ={30} color="green" onPress = {()=>this.changeCheckedElement(r.doc._id,true,r.doc._rev)} />) :
                 (<MaterialIcons  name="check-box" size ={30} color="green" onPress = {()=>this.changeCheckedElement(r.doc._id,false)} />)
                }
                <Text style={{marginLeft:10}}>{r.doc.descricao}</Text>
                
                </Left>
                <Body>
                
                </Body>
                <Right>
                <MaterialIcons  name="delete" size ={30} color="red" onPress = {()=>this.deleteItenList(r.doc._id)} />
                </Right>
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
