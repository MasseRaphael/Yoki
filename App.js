import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {homeStyle} from './style/home';
import {fontsStyle} from "./style/fonts";
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ScanButton from "./components/ScanButton";
import ProductItem from "./components/ProductItem";

export default class App extends React.Component {
  constructor(){
    super();

    this.products = [
      {id: 1, name : 'Coca', date: new Date()},
      {id: 2, name : 'Orangina', date: new Date()},
      {id: 3, name : 'Nestea', date: new Date()},
      {id: 4, name : 'Bière sans alcool', date: new Date()}
    ];

    this.title = "Yoki"
  }


  handleScanPress = () => {
    alert('Je scan un produit')
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
      </View>
    );
  }
}