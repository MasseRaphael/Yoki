import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {homeStyle} from '../style/home';
import ProductItem from './ProductItem';

export default class ProductsHistory extends React.Component {
    constructor(){
        super();
    
        this.products = [
          {id: 1, name : 'Coca', date: new Date()},
          {id: 2, name : 'Orangina', date: new Date()},
          {id: 3, name : 'Nestea', date: new Date()},
          {id: 4, name : 'Bière sans alcool', date: new Date()}
        ]
      }

    render() {

        return(

        <ScrollView style={homeStyle.scrollProductView}>
          {
           this.products.map(
            (produit) => {
                return (
               
                     <ProductItem produit={produit}/>
                 )
               }
           )
          }
        </ScrollView>
        )
    }
};