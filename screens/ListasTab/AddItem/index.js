import React, { Component } from 'react'
import { Text, StyleSheet, View,Modal,TouchableHighlight } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import PouchDB from 'pouchdb-react-native';
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
const db = new PouchDB('mydb', {adapter: 'asyncstorage'})
const localDB = new PouchDB('itensListaSupermecado');
export default class AddItem extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        
        <View style={{flex: 1}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>


    )
  }
}

const styles = StyleSheet.create({})
