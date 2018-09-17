import React, { Component } from 'react'
import { Text, StyleSheet, View , Image,Dimensions, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem} from 'native-base';
import list_products from '../../fakers/fakers';  

export default class OrderTab extends Component {
  constructor(props){
    super(props);
    console.log(this.props.screenProps);  
  }
  
  componentDidMount(){
    const {navigation} = this.props;
    
  }
  static navigationOptions =  {
      tabBarIcon:<MaterialIcons name="restaurant" style={{color:'#fff'}}  size={24} />,
      title:'Cardápio'        
  }
    
  render() {
    const { navigate } = this.props.navigation;
    let {height, width} = Dimensions.get('window');
    return (
      <Container>        
        <Content>
        {this.props.screenProps.list_of_products.category.map((title,i)=>(
          <List key = {i}>
              
              <ListItem itemDivider style={{backgroundColor:"#ececec",borderWidth:1}}>                
                
              </ListItem> 
              <ListItem>
                <Left><Text>{title.nome}</Text></Left>
              </ListItem>
              
              <List>
                {title.items.map((r,i)=>
                    
                      <List key={i} >
                      
                        <ListItem avatar onPress = {()=>navigate('')} >                        
                          <Left>
                            <Thumbnail source={{ uri: r.thumbnail=="" ? "http://img.recipepuppy.com/560556.jpg" : r.thumbnail }} />
                          </Left>
                          <Body>
                              <Text style={{fontWeight:'bold'}}>{r.title}</Text>
                              <Text note numberOfLines={2}>{r.ingredients.join(', ')}</Text>
                          </Body>
                          <Right>                          
                              <Text style={{fontWeight:'bold',color:'#7F1C24'}} note>R$ {r.price.replace('.',',')}</Text>
                          </Right>
                          </ListItem>                        
                    </List>                  
              )}
              </List>
            </List>
          ))}
          
        
          
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({


})
