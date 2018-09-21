import React, { Component } from 'react'
import { Text, StyleSheet, View , Modal,TouchableHighlight, BackHandler,Alert} from 'react-native'
import { Container, Header, Content, Form, Item, Input,Button,ListItem,Body,CheckBox,List,Left} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//PouchDB
import PouchDB from 'pouchdb-react-native';
import ListItemOfListas from '../ListItemOfListas';


//const db = new PouchDB('mydb', {adapter: 'asyncstorage'})
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
PouchDB.plugin(require('pouchdb-find'));

const localDB = new PouchDB('itensListaChamaSupermecados');

//



const itens = [];
export default class AddItem extends Component{
  constructor(props){
    

    super(props);
    
  }  
    
  state = {
    descricao:'',
    quantidade:'',
    valor:'',
    dadosItensLista:[]
    

  }
  
  async componentWillReceiveProps(){    
    const item_Listas = [];
    await localDB.allDocs({include_docs:true,limit:25})
    .then((result)=>{
      result.rows.forEach((r)=>{        
        if(r.doc.parentId===this.props.onParentId){
          item_Listas.push(r);
        }
      })
      this.setState({
        dadosItensLista:item_Listas
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  onSaveAdd = () =>{
    
    const data = {
      'descricao':this.state.descricao,
      'valor':this.state.valor,
      'quantidade':this.state.quantidade,
      'parentId':this.props.onParentId
    }
    
    localDB.post(data).then(function (response) {

      console.log(response);
      // handle response
    }).catch(function (err) {
        console.log(err);
    });

  
  }

  onPressHandlerClose = ()=>{
    this.props.onModalClosed();
  }
  onAddItens=()=>{    
    itens.push(this.state);
    this.onSaveAdd();    
  }


  render(){   
    
    return(
      <Modal
       
      animationType="slide"
      transparent={false}
      visible={this.props.onModalVisibleStatus}
      onRequestClose={() => {
        this.onPressHandlerClose()
      }}>
      
      <Header />
      
      <Content>
        <Form>
          <Item>
            <Input placeholder="Descrição " onChangeText={(text) => this.setState({descricao: text})} />
          </Item>
          <Item>
            <Input placeholder="Quantidade " onChangeText={(text) => this.setState({quantidade: text})} />
          </Item>
          <Item last>
            <Input placeholder="Valor R$ 1,00" onChangeText={(text) => this.setState({valor: text})}/>
          </Item>
        </Form>
        
        <Button   iconLeft block success style = {{marginBottom:30}} onPress={()=>this.onAddItens()}>
          <MaterialIcons name="add" size={30} color="#fff" />
          <Text  style = {{color:'#fff'}}>Adicionar</Text>
        </Button>
      
      
      </Content>     
    
      <Content>
      <List>
          {this.state.dadosItensLista.map((row)=>(              
            <ListItemOfListas key = {row.key} id = {row.key} onDadosListaItem={row.doc}/>                               
          ))}
      </List>
      </Content>
  
    
    </Modal>
    )
  }


}

