import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, TouchableHighlight, Alert} from 'react-native';
import {homeStyle} from './style/home';
import {fontsStyle} from "./style/fonts";
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ScanButton from "./components/ScanButton";
import ProductItem from "./components/ProductItem";

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      modalVisible: false,
    };
    
      this.products = [
      {id: 1, name : 'Coca', date: new Date()},
      {id: 2, name : 'Orangina', date: new Date()},
      {id: 3, name : 'Nestea', date: new Date()},
      {id: 4, name : 'Bière sans alcool', date: new Date()}
    ];

    this.title = "Yoki"
  }

  setModalVisible =(bool) => {
    this.setState({modalVisible: bool});
  }

  handleScanPress = () => {
    this.setModalVisible(true)
    //alert('Je scan un produit')
  };

  handleProductPress = (id) => {
    alert('Je clique sur un produit avec l\'id : ' + id)
  };

  render() {
    return (
      <View style={globalStyle.container}>
        <AppHeader title={this.title}/>

        <ScanButton handlePress={this.handleScanPress}/>

        <ScrollView style={homeStyle.scrollProductView}>
          {
           this.products.map(
               (produit) => {
                 return (
                     <ProductItem product={produit} key={produit.id} onPressItem={this.handleProductPress}/>
                 )
               }
           )
          }
        </ScrollView>
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {Alert.alert('Modal has been closed');}}>
          <View style={{flex: 1}}>
            <AppHeader title="Sanner" />

            <TouchableOpacity 
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={{
                position: "absolute", 
                backgroundColor: "lightblue", 
                width: "100%",
                height: 70,
                left: 0, 
                bottom: 0}}>


                <Text>Hide Modal</Text>
            </TouchableOpacity>              
          </View>
        </Modal>
      </View>
    );
  }
}